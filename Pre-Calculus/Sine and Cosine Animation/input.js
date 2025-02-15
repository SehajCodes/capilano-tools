function keyPressed() {
  if (key == "r") {
    anglesUnits = RADIANS
  }
  
  if (key == "d") {
    anglesUnits = DEGREES
  }
}

function mouseHovering() {
  // hoverClr = "green"
  hoverAngle = -1
  hoverRadius = circleCenter
  positionLine = []
  // fill(hoverClr)
  // Hovering over sine graph
  if (circleCenter*2 + (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2) < mouseX && mouseX <= canvasSide - (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2) && canvasSide - circleCenter*2 < mouseY && mouseY < canvasSide) {
    // console.log(mouseX)
    // rect(100, 100, 100, 100)
    hoverAngle = ((mouseX-circleCenter*2)-(canvasSide*(1-circleGraphRatio)/2)*(1-circleGraphScale))/(canvasSide*(1-circleGraphRatio)*circleGraphScale)*revolution
    // strokeWeight(strokeVal/2)
    // stroke(hoverClr)
    line(mouseX, canvasSide-circleCenter*2, mouseX, canvasSide)
  }
  // Hovering over cosine graph
  if ((canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2) < mouseY && mouseY <= canvasSide - circleCenter*2 - (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2) && 0 < mouseX && mouseX < circleCenter*2) {
    // hoverAngle = (mouseY+canvasSide-circleCenter*2)/(canvasSide*(1-circleGraphRatio))*revolution
    hoverAngle = (mouseY-(canvasSide*(1-circleGraphRatio)/2*(1-circleGraphScale)))/(canvasSide*(1-circleGraphRatio)*circleGraphScale)*revolution
    line(0, mouseY, circleCenter*2, mouseY)
  }
  // Hovering over circle
  distanceFromCenter = sqrt((mouseX-circleCenter)**2+(mouseY-(canvasSide-circleCenter))**2)
  // console.log(distanceFromCenter)
  if (distanceFromCenter < circleRadius) {
    hoverRadius = distanceFromCenter*2
    // Quad I
    referenceAngle = abs(atan((mouseY-(canvasSide-circleCenter))/(circleCenter-mouseX)))
    hoverAngle = referenceAngle
    // Quad II
    if (mouseX < circleCenter && mouseY <= canvasSide - circleCenter) {
      hoverAngle = (revolution/2)-referenceAngle
    }
    // Quad III
    if (mouseX <= circleCenter && mouseY > canvasSide - circleCenter) {
      hoverAngle = (revolution/2)+referenceAngle
    }
    // Quad IV
    if (mouseX > circleCenter && mouseY > canvasSide - circleCenter) {
      hoverAngle = revolution-referenceAngle
    }
  }
  if (hoverAngle == -1) {return false}

  angleChangeSpeed = 0
  angle = hoverAngle

  // stroke(0)
  // strokeWeight(0)
  // fill(0)
  return true
}