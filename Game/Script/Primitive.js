class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    sub(v) {
        return new Vector2D(this.x - v.x, this.y - v.y)
    }

    static VecNorm(v) {
        return Math.sqrt(v.x ** 2 + v.y ** 2)
    }

    static VecNormalize(v) {
        let n = Math.sqrt(v.x ** 2 + v.y ** 2)
        return new Vector2D(v.x / n, v.y / n)
    }

    static VecSub(v1, v2) {
        return new Vector2D(v1.x - v2.x, v1.y - v2.y)
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }
}
