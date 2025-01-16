function drawCircle() {
  // Drawing circle
  strokeWeight(strokeVal)
  fill(backgroundClr)
  circle(circleCenter, canvasSide-circleCenter, circleCenter*2)
  // Drawing quadrant-separating lines
  line(circleCenter, canvasSide - circleCenter*2, circleCenter, canvasSide)
  line(0, canvasSide - circleCenter, circleCenter*2, canvasSide - circleCenter)
}

function drawGraphs() {
  // Drawing sine and cosine graphs
  // fill(255, 0, 0)
  fill(0)
  line(circleCenter*2, 0, circleCenter*2, canvasSide)
  line(0, canvasSide - circleCenter*2, canvasSide, canvasSide - circleCenter*2)
  
  // Drawing sine graph
  // strokeWeight(0)
  stroke(255, 0, 0)
  for (i = 0; i < canvasSide*(1-circleGraphRatio); i++) {
    line((circleCenter*2)+i+1, canvasSide - circleCenter-sinePoints[i], (circleCenter*2)+i+2, canvasSide - circleCenter-sinePoints[i+1])
  }
  // Drawing cosine graph
  stroke(0, 0, 255)
  for (i = 0; i < canvasSide*(1-circleGraphRatio); i++) {
    line(circleCenter+cosinePoints[i], i+1, circleCenter+cosinePoints[i+1], i+2)
  }
}

function drawAnglesMarkings() {
  stroke(0)
  // Drawing angles markings
  if (anglesUnits == RADIANS) {
    // line(circleCenter*0.9, canvasSide-circleCenter*2.01, circleCenter*1.1, canvasSide-circleCenter*2.01)
    line(circleCenter*0.9, (canvasSide-(circleCenter*2))*0.75, circleCenter*1.1, (canvasSide-(circleCenter*2))*0.75)
    line(circleCenter*0.9, (canvasSide-(circleCenter*2))*0.5, circleCenter*1.1, (canvasSide-(circleCenter*2))*0.5)
    line(circleCenter*0.9, (canvasSide-(circleCenter*2))*0.25, circleCenter*1.1, (canvasSide-(circleCenter*2))*0.25)
    
    line((circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.25), canvasSide-circleCenter*0.9, (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.25), canvasSide-circleCenter*1.1)
    line((circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.50), canvasSide-circleCenter*0.9, (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.50), canvasSide-circleCenter*1.1)
    line((circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.75), canvasSide-circleCenter*0.9, (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.75), canvasSide-circleCenter*1.1)
    
    noStroke()
    // text("0", circleCenter*0.9, canvasSide-circleCenter*2.03)
    // text("π/2", circleCenter*0.67, (canvasSide-(circleCenter*2))*0.768)
    // text("π", circleCenter*0.78, (canvasSide-(circleCenter*2))*0.51)
    // text("3π/2", circleCenter*0.59, (canvasSide-(circleCenter*2))*0.265)
    // text("2π", (canvasSide-(circleCenter*2))*0.23, circleCenter*0.14)
    // text("360", circleCenter*0.9, canvasSide-circleCenter*2.03)
    text("3π/2", circleCenter*0.57, (canvasSide-(circleCenter*2))*0.768)
    text("π", circleCenter*0.79, (canvasSide-(circleCenter*2))*0.51)
    text("π/2", circleCenter*0.67, (canvasSide-(circleCenter*2))*0.265)
    text("0", (canvasSide-(circleCenter*2))*0.28, circleCenter*0.11)
    
    text("0", circleCenter*2.03, canvasSide-circleCenter*0.87)
    text("π/2", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.23), canvasSide-circleCenter*0.79)
    text("π", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.48), canvasSide-circleCenter*0.79)
    text("3π/2", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.72), canvasSide-circleCenter*0.79)
    // text("2π", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.9), (canvasSide-(circleCenter*1.04)))
  } else if (anglesUnits == DEGREES) {
    // line(circleCenter*0.9, canvasSide-circleCenter*2.01, circleCenter*1.1, canvasSide-circleCenter*2.01)
    line(circleCenter*0.9, (canvasSide-(circleCenter*2))*0.75, circleCenter*1.1, (canvasSide-(circleCenter*2))*0.75)
    line(circleCenter*0.9, (canvasSide-(circleCenter*2))*0.25, circleCenter*1.1, (canvasSide-(circleCenter*2))*0.25)
    line(circleCenter*0.9, (canvasSide-(circleCenter*2))*0.5, circleCenter*1.1, (canvasSide-(circleCenter*2))*0.5)
    
    line((circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.25), canvasSide-circleCenter*0.9, (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.25), canvasSide-circleCenter*1.1)
    line((circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.50), canvasSide-circleCenter*0.9, (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.50), canvasSide-circleCenter*1.1)
    line((circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.75), canvasSide-circleCenter*0.9, (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.75), canvasSide-circleCenter*1.1)
    
    noStroke()
    // text("360", circleCenter*0.9, canvasSide-circleCenter*2.03)
    text("270°", circleCenter*0.57, (canvasSide-(circleCenter*2))*0.768)
    text("180°", circleCenter*0.63, (canvasSide-(circleCenter*2))*0.51)
    text("90°", circleCenter*0.67, (canvasSide-(circleCenter*2))*0.265)
    text("0°", (canvasSide-(circleCenter*2))*0.28, circleCenter*0.11)
    
    text("0°", circleCenter*2.03, canvasSide-circleCenter*0.87)
    text("90°", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.23), canvasSide-circleCenter*0.79)
    text("180°", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.47), canvasSide-circleCenter*0.79)
    text("270°", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.72), canvasSide-circleCenter*0.79)
    // text("360°", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.9), (canvasSide-(circleCenter*1.04)))
  }
  text("θ", circleCenter*1.2, canvasSide-(circleCenter*1.2))
}

function drawCurrent() {
  strokeWeight(strokeVal)
  stroke(0)
  noFill()
  arc(circleCenter, canvasSide - circleCenter, circleCenter*0.5, circleCenter*0.5, -1*angle, 0, [CHORD])
  // Drawing lines connecting the point to axes
  line(pointX, pointY, pointX, 0)
  line(pointX, pointY, canvasSide, pointY)
    // Drawing rotating line
  line(circleCenter, canvasSide - circleCenter, pointX, pointY)
  strokeWeight(strokeVal*0.75)
  // Drawing thin lines connecting circle points and graph points
  line(pointX, canvasSide - circleCenter, pointX, (rev*(1-circleGraphRatio)*canvasSide))
  line(circleCenter, pointY, (circleCenter*2)+(rev*(1-circleGraphRatio)*canvasSide), pointY)
  strokeWeight(strokeVal/2)
  // Drawing thinner lines halving the graphs
  line(0, canvasSide - circleCenter, canvasSide, canvasSide - circleCenter)
  line(circleCenter, 0, circleCenter, canvasSide)
  
  strokeWeight(0)
  // Drawing points on X and Y axes and the corresponding points on the sine and cosine graphs
  // Drawing x point
  fill(0, 0, 255)
  circle(pointX, canvasSide - circleCenter, pointsDiameter)
  // Drawing point on the cosine graph
  // circle(pointX, canvasSide - circleCenter*2 - (rev*(1-circleGraphRatio)*canvasSide), pointsDiameter)
  circle(pointX, (rev*(1-circleGraphRatio)*canvasSide), pointsDiameter)
  // Drawing y point
  fill(255, 0, 0)
  circle(circleCenter, pointY, pointsDiameter)
  // Drawing point on the sine graph
  circle((circleCenter*2)+(rev*(1-circleGraphRatio)*canvasSide), pointY, pointsDiameter)
  // Drawing point on circumference of circle
  fill(0)
  circle(pointX, pointY, pointsDiameter)
}

function drawInstructions() {
  fill(255, 0, 0)
  text("Sin(θ)→", (circleCenter*2)+(canvasSide*(1-circleGraphRatio)*0.03), canvasSide-circleCenter*0.1)

  fill(0, 0, 255)
  text("Cos(θ)↑", circleCenter*0.07, (canvasSide-(circleCenter*2))*0.96)

  fill(0)

  text("Press R key to display radians\nPress D key to display degrees", circleCenter*2+circleCenter/3, canvasSide*(1-circleGraphRatio)*0.28)

  text("Try hovering your mouse over\nthe circle or one of the graphs!", circleCenter*2+circleCenter/3, canvasSide*(1-circleGraphRatio)*0.78)

}

function drawSlider() {
  text("Revolutions per second: "+slider.value(), circleCenter*2+circleCenter/4, canvasSide*(1-circleGraphRatio)*0.58)
  slider.value(revolutionsPerSecond)
  slider.position((windowWidth-canvasSide)/2+circleCenter*2+circleCenter/4, canvasSide*(1-circleGraphRatio)*0.6)
  slider.size(canvasSide*(1-circleGraphRatio)-circleCenter/2)
}