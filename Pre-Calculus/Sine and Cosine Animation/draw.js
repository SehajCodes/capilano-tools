function drawCircle() {
  //y arrow
  text("Y", circleCenter+(unit*10), canvasSide*(1-circleGraphRatio)+(unit*25))
  text("X", (circleCenter*2)-(unit*20), canvasSide-circleCenter-(unit*10))

  // Drawing circle
  strokeWeight(strokeVal)
  fill(backgroundClr)
  circle(circleCenter, canvasSide-circleCenter, circleRadius*2)
  // Drawing quadrant-separating lines
  // line(circleCenter, canvasSide - circleCenter*2, circleCenter, canvasSide)
  // line(0, canvasSide - circleCenter, circleCenter*2, canvasSide - circleCenter)
  line(circleCenter, 0, circleCenter, canvasSide)
  line(0, canvasSide - circleCenter, canvasSide, canvasSide - circleCenter)

  // y arrow
  line(circleCenter-(unit*10), canvasSide*(1-circleGraphRatio)+(unit*25), circleCenter, canvasSide*(1-circleGraphRatio)+(unit*10))
  line(circleCenter+(unit*10), canvasSide*(1-circleGraphRatio)+(unit*25), circleCenter, canvasSide*(1-circleGraphRatio)+(unit*10))

  // x arrow
  line((circleCenter*2)-(unit*25), canvasSide-circleCenter-(unit*10), (circleCenter*2)-(unit*10), canvasSide-circleCenter)
  line((circleCenter*2)-(unit*25), canvasSide-circleCenter+(unit*10), (circleCenter*2)-(unit*10), canvasSide-circleCenter)

}

function drawGraphs() {
  // Drawing sine and cosine graphs
  fill(0)
  
  line(circleCenter*2, 0, circleCenter*2, canvasSide)
  line(0, canvasSide - circleCenter*2, canvasSide, canvasSide - circleCenter*2)

  line(0, ((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), circleCenter*2, ((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2))
  line((circleCenter*2)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), canvasSide-(circleCenter*2), (circleCenter*2)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), canvasSide)

  //x arrow
  line((circleCenter*2)-(unit*15), ((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2)-(unit*10), circleCenter*2, ((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2))
  line((circleCenter*2)-(unit*15), ((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2)+(unit*10), circleCenter*2, ((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2))
  // theta arrow for cosine graph
  line(circleCenter-(unit*10), canvasSide*(1-circleGraphRatio)-(unit*25), circleCenter, canvasSide*(1-circleGraphRatio)-(unit*10))
  line(circleCenter+(unit*10), canvasSide*(1-circleGraphRatio)-(unit*25), circleCenter, canvasSide*(1-circleGraphRatio)-(unit*10))
  
  //y arrow
  line((circleCenter*2)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), canvasSide-(circleCenter*2), (circleCenter*2)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2)-(unit*10), canvasSide-(circleCenter*2)+(unit*20))
  line((circleCenter*2)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), canvasSide-(circleCenter*2), (circleCenter*2)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2)+(unit*10), canvasSide-(circleCenter*2)+(unit*20))
  // theta arrow for sine graph
  line(canvasSide-(unit*25), canvasSide-circleCenter-(unit*10), canvasSide-(unit*10), canvasSide-circleCenter)
  line(canvasSide-(unit*25), canvasSide-circleCenter+(unit*10), canvasSide-(unit*10), canvasSide-circleCenter)
  
  
  // Drawing sine graph
  // strokeWeight(0)
  stroke(255, 0, 0)
  for (i = 0; i < canvasSide*(1-circleGraphRatio); i++) {
    line((circleCenter*2)+i+1+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), canvasSide - circleCenter-sinePoints[i], (circleCenter*2)+i+2+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), canvasSide - circleCenter-sinePoints[i+1])
  }
  // Drawing cosine graph
  stroke(0, 0, 255)
  for (i = 0; i < canvasSide*(1-circleGraphRatio); i++) {
    line(circleCenter+cosinePoints[i], (i+1)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), circleCenter+cosinePoints[i+1], (i+2)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2))
  }

  noStroke()
  text("X", (circleCenter*2)-(unit*23), ((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2)+(unit*35))
  text("θ", circleCenter+(unit*15), canvasSide-(circleCenter*2)-(unit*10))
  text("Y", (circleCenter*2)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2)+(unit*10), canvasSide-(circleCenter*2)+(unit*25))
  text("θ", canvasSide-(unit*20), canvasSide-circleCenter-(unit*10))
}

function drawAnglesMarkings() {
  // Drawing angles markings
  if (anglesUnits == RADIANS) {
    markings = ["0", "π/2", "π", "3π/2", "2π"]
  } else if (anglesUnits == DEGREES) {
    markings = ["0°", "90°", "180°", "270°", "360°"]
  }
  for (let i = 1; i < 5; i++) {
    stroke(0)
    line((circleCenter*2)+(canvasSide-(circleCenter*2))*circleGraphScale*i/4 + (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2), canvasSide-circleCenter-(unit*20), (circleCenter*2)+(canvasSide-(circleCenter*2))*circleGraphScale*i/4 + (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2), canvasSide-circleCenter+(unit*20))
    line(circleCenter-(unit*20), (canvasSide-(circleCenter*2))*circleGraphScale*i/4 + (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2), circleCenter+(unit*20), (canvasSide-(circleCenter*2))*circleGraphScale*i/4 + (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2))
    noStroke()
    text(markings[i], (circleCenter*2)+(canvasSide-(circleCenter*2))*circleGraphScale*i/4 + (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2)-(unit*15), canvasSide-circleRadius)
    text(markings[i], circleRadius-(unit*30), (canvasSide-(circleCenter*2))*circleGraphScale*i/4 + (canvasSide*(1-circleGraphRatio)*(1-circleGraphScale)/2)+(unit*5))
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
  circle(pointX, ((rev*(1-circleGraphRatio)*canvasSide)*circleGraphScale)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), pointsDiameter)
  // Drawing y point
  fill(255, 0, 0)
  circle(circleCenter, pointY, pointsDiameter)
  // Drawing point on the sine graph
  circle((circleCenter*2)+((rev*(1-circleGraphRatio)*canvasSide)*circleGraphScale)+((((1-circleGraphRatio)*canvasSide)*(1-circleGraphScale))/2), pointY, pointsDiameter)
  // Drawing point on circumference of circle
  fill(0)
  circle(pointX, pointY, pointsDiameter)
}

function drawInstructions() {
  fill(0)

  text("Press \"R\" key to display radians\nPress \"D\" key to display degrees", circleCenter*2+circleCenter/3, canvasSide*(1-circleGraphRatio)*0.3)

  text("Try hovering your mouse over\nthe circle or one of the graphs!", circleCenter*2+circleCenter/3, canvasSide*(1-circleGraphRatio)*0.78)
  
  textSize(canvasSide/40)
  text(" Made by Sehajdeep Singh", circleCenter*2.15+circleCenter/3, canvasSide*(1-circleGraphRatio)*0.05)
  textSize(canvasSide/36)

}

function drawSlider() {
  text("Revolutions per second: "+slider.value(), circleCenter*2+circleCenter/4, canvasSide*(1-circleGraphRatio)*0.52)
  slider.value(revolutionsPerSecond)
  slider.position((windowWidth-canvasSide)/2+circleCenter*2+circleCenter/4, canvasSide*(1-circleGraphRatio)*0.56)
  slider.size(canvasSide*(1-circleGraphRatio)-circleCenter/2)
}