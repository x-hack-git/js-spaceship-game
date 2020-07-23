// メインループ
function updateScreen() {
  gameScreenCtx.fillStyle = "#0C2659"
  gameScreenCtx.fillRect(0, 0, 440, 440)

  // オブジェクトの描画
  drawGameObjects()
}

function drawGameObjects() {
  gameObjects.forEach(element => {
    if (!element.dead) {
      element.update()
    }
  });
}

function keyPressed(event){
  var x = event.keyCode;

  // ゲームが始まっていない状態でスペースキー以外が押された場合
  if (!gameStart && x !== 32) { return }

  // ゲームが始まっていない状態でスペースキーが押された場合
  if (!gameStart && x === 32) {
    gameStart = true
    return startNewGame()
  }

  // 上方向
  if (x === 38) {
    if (player.position.y <= 0) return player.position.y = 0
    player.position.y -= 20
  }
  // 下方向
  if (x === 40) {
    if (player.position.y >= 380) return player.position.y = 380
    player.position.y += 20
  }
  // スペースキーが押されたら爆弾を置く
  if (x === 32) {
    let bombNum = Math.floor(Math.random() * 100)

    firedBombs.push(new Bomb("./assets/fire_blue.png", player.position.x + 45, player.position.y + 15))
  }
}