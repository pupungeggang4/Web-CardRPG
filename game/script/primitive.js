class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    distance(v) {
        return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2)
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }
}
