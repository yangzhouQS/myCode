'use strict';
var Main;
(function (Main) {
    var FloorType = {
        space: "space",
        snack: "body",
        food: "food"
    };
    var score = 0;
    var FLoor = /** @class */ (function () {
        function FLoor(options) {
            console.log(options);
            options = options || {};
            this.table = document.createElement("table");
            this.parent = options.parent || document.body;
            this.row = options.row || 20;
            this.col = options.col || 20;
            this.blocks = [];
        }
        FLoor.prototype.DrawFloor = function () {
            for (var i = 0; i < this.row; i++) {
                var tr = this.table.insertRow(-1);
                for (var k = 0; k < this.col; k++) {
                    var td = tr.insertCell(-1);
                    td.className = FloorType.space;
                    var block = {
                        pos: { x: k, y: i },
                        type: FloorType.space,
                        node: td
                    };
                    this.blocks.push(block);
                }
            }
            this.parent.appendChild(this.table);
        };
        FLoor.prototype.DrawGameOver = function () {
            var div = document.createElement("div");
            div.className = "gameover";
            div.innerHTML = "Game Over score:" + score;
            div.style.top = this.row * 20 / 2 - 50 + "px";
            div.style.left = this.row * 20 / 2 - 100 + "px";
            this.parent.appendChild(div);
        };
        FLoor.prototype.ReDraw = function (blocks) {
            blocks.forEach(function (block) {
                block.node.className = block.type;
            });
        };
        return FLoor;
    }());
    Main.FLoor = FLoor;
    var Snack = /** @class */ (function () {
        function Snack(floor, options) {
            options = options || {};
            this.len = options.len || 3;
            this.speed = options.speed || 60;
            this.direction = options.direction || 39 /* right */;
            this.floor = options.floor || floor;
            this.bodies = [];
        }
        Snack.prototype.DrawSnack = function () {
            var _this = this;
            var setDirection = function (e) {
                var keycode = e.keyCode;
                switch (keycode) {
                    case 37 /* left */:
                        if (_this.direction !== 39 /* right */) {
                            _this.direction = 37 /* left */;
                        }
                        break;
                    case 39 /* right */:
                        if (_this.direction !== 37 /* left */) {
                            _this.direction = 39 /* right */;
                        }
                        break;
                    case 38 /* up */:
                        if (_this.direction !== 40 /* down */) {
                            _this.direction = 38 /* up */;
                        }
                        break;
                    case 40 /* down */:
                        if (_this.direction !== 38 /* up */) {
                            _this.direction = 40 /* down */;
                        }
                        break;
                }
            };
            document.addEventListener('keydown', setDirection, false);
            for (var i = 0; i < this.len; i++) {
                this.bodies.push(this.floor.blocks[i]);
            }
            this.RandFood();
            this.bodies.forEach(function (block) {
                block.type = FloorType.snack;
            });
            this.floor.ReDraw(this.bodies);
            this.timer = setInterval(function () {
                _this.Move();
            }, this.speed);
        };
        Snack.prototype.RandFood = function () {
            var p = {
                x: Math.ceil(this.floor.col * Math.random()),
                y: Math.ceil(this.floor.row * Math.random()),
            };
            var food = this.floor.blocks.filter(function (block) {
                if (block.pos.x == p.x && block.pos.y == p.y) {
                    return true;
                }
            });
            food[0].type = FloorType.food;
            this.floor.ReDraw(food);
        };
        Snack.prototype.Move = function () {
            var head = this.bodies[this.bodies.length - 1];
            var next = this.next(head);
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
            var tail = this.bodies.shift();
            tail.type = FloorType.space;
            next.type = FloorType.snack;
            this.bodies.push(next);
            this.floor.ReDraw([tail]);
            this.floor.ReDraw(this.bodies);
        };
        Snack.prototype.Die = function () {
            clearInterval(this.timer);
            this.floor.DrawGameOver();
        };
        Snack.prototype.next = function (targert) {
            var x;
            var y;
            switch (this.direction) {
                case 37 /* left */:
                    x = targert.pos.x - 1;
                    y = targert.pos.y;
                    break;
                case 39 /* right */:
                    x = targert.pos.x + 1;
                    y = targert.pos.y;
                    break;
                case 38 /* up */:
                    x = targert.pos.x;
                    y = targert.pos.y - 1;
                    break;
                case 40 /* down */:
                    x = targert.pos.x;
                    y = targert.pos.y + 1;
                    break;
            }
            return this.floor.blocks.filter(function (block) {
                if (x == block.pos.x && y == block.pos.y) {
                    return true;
                }
            })[0];
        };
        return Snack;
    }());
    Main.Snack = Snack;
})(Main || (Main = {}));
var floor = new Main.FLoor({
    parent: document.getElementById("box")
});
floor.DrawFloor();
var snack = new Main.Snack(floor);
snack.DrawSnack();
