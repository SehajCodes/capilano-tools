function setup() {
  canvasSide = canvasDimensions()
  createCanvas(canvasSide, canvasSide)

  unit = canvasSide/1000

  backgroundClr = color(255, 255, 255)
  background(backgroundClr)

  circleGraphRatio = 0.45

  circleGraphScale = 0.85

  circleCenter = canvasSide*circleGraphRatio/2
  circleRadius = circleCenter*circleGraphScale

  pointsDiameter = circleCenter*0.1

  // Set units of angles as degrees or radians (affects display angles and all under-the-hood calculations as well)
  // anglesUnits = DEGREES 
  anglesUnits = RADIANS

  angleMode(anglesUnits)


  revolutionsPerSecond = 0.4
  
  revolution=0
  if (anglesUnits == DEGREES) {
    revolution = 360
  } else if (anglesUnits == RADIANS) {
    revolution = TWO_PI
  }

  sinePoints = []
  cosinePoints = []
  sinePoints, cosinePoints = calculateGraphPoints()

  angle = 0
  angleChangeSpeed = revolution*revolutionsPerSecond
  
  strokeVal = canvasSide/300
  rev=0

  slider = createSlider(0, 1, 0, 0.001);
  slider.value(revolutionsPerSecond)
  textSize(canvasSide/36)
}

function draw() {
  background(backgroundClr)
  
  drawCircle()
  
  revolutionsPerSecond = slider.value()
  angleChangeSpeed = revolution*revolutionsPerSecond
  mouseHovering()
  
  pointX = circleCenter + (cos(angle)*circleRadius)
  pointY = canvasSide - circleCenter - (sin(angle)*circleRadius)
  
  
  drawGraphs()

  drawAnglesMarkings()
  
  drawCurrent()

  drawInstructions()
  
  drawSlider()
  
  angle += angleChangeSpeed * (deltaTime/1000)
  if (angle>revolution) {angle-=revolution}
  rev = angle/revolution

  // textSize(50)
  // text(millis(), 100, 100)
  // text(deltaTime, 100, 100)
  // text(canvasSide, 400, 400)
}

function canvasDimensions() {
  if (windowWidth>=windowHeight) {
    side = windowHeight
  } else {
    side = windowWidth
  }
  return side
}

function windowResized() {
  canvasSide = canvasDimensions()
  unit = canvasSide/1000
  // createCanvas(canvasSide, canvasSide)
  resizeCanvas(canvasSide, canvasSide)
  circleCenter = canvasSide*circleGraphRatio/2
  circleRadius = circleCenter*circleGraphScale
  sinePoints, cosinePoints = calculateGraphPoints()
  textSize(canvasSide/36)
  strokeVal = canvasSide/300
  pointsDiameter = circleCenter*0.1
}

function calculateGraphPoints() {
    pointsCount = canvasSide*(1-circleGraphRatio)*circleGraphScale
  // console.log(canvasSide, pointsCount)
  sinePoints = []
  cosinePoints = []
  for (i = 0; i < pointsCount; i++) {
    angle = revolution*i/pointsCount
    append(sinePoints, sin(angle)*circleRadius)
    append(cosinePoints, cos(angle)*circleRadius)
  }
  return sinePoints, cosinePoints
}