module Geometry {
    export interface Vector3dInterface {
        toArray(callback: (x: number[]) => void);

        length(): number;

        normalize();
    }

    export class Vector2d implements Vector3dInterface {
        private _x: number;
        private _y: number;

        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

        length(): number {
            return Math.sqrt(this._x * this._y * this._y * this._x);
        }

        normalize() {
            let len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        }

        toArray(callback: (x: number[]) => void) {
            callback([this._x, this._y])
        }
    }
}
let vetor: Geometry.Vector3dInterface = new Geometry.Vector2d(2, 3);
console.log(vetor);
vetor.normalize();
