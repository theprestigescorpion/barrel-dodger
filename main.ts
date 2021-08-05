controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = -100
    mySprite.fx = 200
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = 100
    mySprite.fx = -200
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.splatter)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level6`)
mySprite = sprites.create(assets.image`barrel disguise O_o`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
mySprite.ay = 500
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . e e f f f e e . . . . . 
        . . . . e f f f f f e . . . . . 
        . . . . e e f f f e e . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . . e e e . . . . . . . 
        `, -120, 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 6))
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . e e f f f e e . . . . . 
        . . . . e f f f f f e . . . . . 
        . . . . e e f f f e e . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . . e e e . . . . . . . 
        `, randint(-100, -120), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 6))
})
