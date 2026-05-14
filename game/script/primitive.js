class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    distance(v) {
        return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2)
    }

    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y
    }

    static add(v1, v2) {
        return new Vec2(v1.x + v2.x, v1.y + v2.y)
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }
}
