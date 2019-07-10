'use strict'
module Main {
  const FloorType = {
    space: "space",
    snack: "body",
    food: "food"
  };

  const enum Direction {
    left = 37,
    up = 38,
    right = 39,
    down = 40
  };

  interface Block {
    pos: Pos
    type: string
    node: HTMLElement
  };

  interface Pos {
    x: number
    y: number
  };

  let score: number = 0;

  export class FLoor {
    private table: HTMLTableElement;
    public row: number;
    public col: number;
    public blocks: Block[];
    private parent: HTMLElement;

    constructor(options?) {
      //console.log(options);
      options = options || {};
      this.table = document.createElement("table");
      this.parent = options.parent || document.body;
      this.row = options.row || 20;
      this.col = options.col || 20;
      this.blocks = [];
    }

    DrawFloor() {
      for (let i = 0; i < this.row; i++) {
        let tr = <HTMLTableRowElement>this.table.insertRow(-1);
        for (let k = 0; k < this.col; k++) {
          let td = <HTMLTableCellElement>tr.insertCell(-1);
          td.className = FloorType.space;
          let block: Block = {
            pos: {x: k, y: i},
            type: FloorType.space,
            node: td
          };
          this.blocks.push(block);
        }
      }
      this.parent.appendChild(this.table);
    }

    DrawGameOver() {
      let div = document.createElement("div");
      div.className = "gameover";
      div.innerHTML = "Game Over score:" + score;
      div.style.top = this.row * 20 / 2 - 50 + "px";
      div.style.left = this.row * 20 / 2 - 100 + "px";
      this.parent.appendChild(div);
    }

    ReDraw(blocks: Block[]) {
      blocks.forEach((block) => {
        block.node.className = block.type
      })
    }
  }

  export class Snack {
    private len: number;
    private speed: number;
    private bodies: Block[];
    private direction: Direction;
    private floor: FLoor;
    private timer?: number;

    constructor(floor: FLoor, options?) {
      options = options || {};
      this.len = options.len || 3;
      this.speed = /*options.speed ||*/ 160;
      this.direction = options.direction || Direction.right;
      this.floor = options.floor || floor;
      this.bodies = [];
    }

    DrawSnack() {
      let setDirection = (e: KeyboardEvent): void => {
        const keycode = e.keyCode;
        switch (keycode) {
          case Direction.left:
            if (this.direction !== Direction.right) {
              this.direction = Direction.left;
            }
            break;
          case Direction.right:
            if (this.direction !== Direction.left) {
              this.direction = Direction.right;
            }
            break;
          case Direction.up:
            if (this.direction !== Direction.down) {
              this.direction = Direction.up;
            }
            break;
          case Direction.down:
            if (this.direction !== Direction.up) {
              this.direction = Direction.down;
            }
            break;
        }
      };
      document.addEventListener('keydown', setDirection, false);
      for (let i = 0; i < this.len; i++) {
        this.bodies.push(this.floor.blocks[i]);
      }
      this.RandFood();
      this.bodies.forEach((block) => {
        block.type = FloorType.snack
      });
      this.floor.ReDraw(this.bodies);
      this.timer = setInterval(() => {
        this.Move()
      }, this.speed);
    }

    RandFood() {
      let p: Pos = {
        x: Math.ceil(this.floor.col * Math.random()),
        y: Math.ceil(this.floor.row * Math.random()),
      }
      let food = this.floor.blocks.filter((block) => {
        if (block.pos.x == p.x && block.pos.y == p.y) {
          return true;
        }
      });
      food[0].type = FloorType.food;
      this.floor.ReDraw(food);
    }

    Move() {
      let head: Block = this.bodies[this.bodies.length - 1];
      let next: Block = this.next(head);
      if (!next || next.type == FloorType.snack) {
        this.Die();
        return;
      }
      if (next.type == FloorType.food) {
        this.bodies.push(next);
        next.type = FloorType.snack;
        this.floor.ReDraw(this.bodies);
        this.RandFood();
        next = this.next(this.bodies[this.bodies.length - 1]);
        score++;
      }

      let tail: Block = <Block>this.bodies.shift();
      tail.type = FloorType.space;
      next.type = FloorType.snack;
      this.bodies.push(next);
      this.floor.ReDraw([tail]);
      this.floor.ReDraw(this.bodies);
    }

    Die() {
      clearInterval(this.timer);
      this.floor.DrawGameOver();
    }

    next(targert: Block): Block {
      let x: number;
      let y: number;
      switch (this.direction) {
        case Direction.left:
          x = targert.pos.x - 1;
          y = targert.pos.y;
          break;
        case Direction.right:
          x = targert.pos.x + 1;
          y = targert.pos.y;
          break;
        case Direction.up:
          x = targert.pos.x;
          y = targert.pos.y - 1;
          break;
        case Direction.down:
          x = targert.pos.x;
          y = targert.pos.y + 1;
          break;
      }
      return this.floor.blocks.filter((block) => {
        if (x == block.pos.x && y == block.pos.y) {
          return true;
        }
      })[0];
    }
  }
}
let floor = new Main.FLoor({
  parent: document.getElementById("box")
});
floor.DrawFloor();
let snack = new Main.Snack(floor);
snack.DrawSnack();
