# Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation

##### *What technologies used in this project.*

*JavaScript and jQuery were used together in this project.*

##### *The libraries used in this project.*

<> **Jquery UI -> https://jqueryui.com/**


##### *The plugins used in that project.*

<> **jQuery UI dialog -> https://jqueryui.com/dialog/**

##### "What spesific features used in that project"

<> **Local storage**
<> **Animation**

##### *Aim of this project*

**This frontend development is designed for users who are monitoring system tables. Because the companies which will use that development, have to offer a services to clients based on 7/24 principles.**

**The aim here is to give users who monitor the system more flexibility and more control over the system. To achieve this, some helper things are being used such as managing animation with one click, getting the information of spesific line with one click, localstorage, counters for stating the amount of records with spesific color. These helper functionalities will be explained more detailed with particular images in the next section.**

##### *Feature and functionality of this Software (With images and code pieces)*

<> **Counters**
- *Counters noticing users about the amount of problematic records on the table. You can see necessary code below.*

![Counters][Counters]

[Counters]: https://i.itsosticky.com/1qqk5kt.png "Counters"

##Code Snippets
```html
   <div class="circle1">
      <div class="redCounter"></div>
    </div>
    <div class="circle2">
      <div class="orangeCounter"></div>
    </div>
    <div class="circle3">
      <div class="grayCounter"></div>
    </div>
  </div>
```
```javascript
  // selecting tr of the table
  var table = $("#WebRequestGridView tbody tr");
  // defining the variable the you see on the button within black circle.
  var redCounter = 0;
  var orangeCounter = 0;
  var grayCounter = 0;
  //looping through table and check the color of each line then increment the value of counter.
  for (var i = 0; i < table.length; i++) {
    if ($(table[i]).css("background-color") === "rgb(255, 0, 0)") {
      redCounter++;

    } else if ($(table[i]).css("background-color") === "rgb(255, 165, 0)") {
      orangeCounter++;

    } else if ($(table[i]).css("background-color") === "rgb(128, 128, 128)") {
      grayCounter++;

    }
    //And as last step , showing those numbers in divs seperately.
    $(".redCounter").text(redCounter);
    $(".orangeCounter").text(orangeCounter);
    $(".grayCounter").text(grayCounter);
  }
```
### **Figure 1 - Code that shows the line of counters**

<> **LocalStorage**

###**[MDN LocalStorage Web Page](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)**

- *localStorage is an object that can be seen as "client session". Its a storage object to save data into.*

## Code Snippets

```javascript
localStorage.setItem("popup2", $id);

if (localStorage.getItem('popup2')) {
      var $popup2id = localStorage.getItem('popup2');
      setTimeout(function delay() {
        $("#" + $popup2id).trigger('click');
      }, 1000);
```



<> **Managing Animation with Click**

- *In design of this app., the table has records with particular colors like red, gray, blue, orange, gray.*

![AnimationOff][Records]

[Records]: https://i.itsosticky.com/epgwho.png "Records"

- *Records that has one of those colors need to be reported. So in case table have such records will be animated automatically to grab the attention of system observer. The extra feature that comes in handy, those people can manage the animations with the help of division that you see the image below.*

![AnimationOff][AnimationOff]

[AnimationOff]: https://i.itsosticky.com/lptzvo.png "AnimationOff"

##Code Snippest

```css
 .niceRed {
   background-color: #D95433;
 }
 
 .niceRed.darkenNiceRed {
   animation-duration: 1s;
   animation-name: changeColorsRed;
   animation-iteration-count: infinite;
 }
 
 @keyframes changeColorsNiceRed {
   from {
     background-color: red;
   }
   to {
     background-color: #660000;
   }
 }
 
 .niceOrange {
   background-color: #FFB84D;
 }
 
 .niceOrange.darkenNiceOrange {
   animation-duration: 1s;
   animation-name: changeColorsOrange;
   animation-iteration-count: infinite;
 }
 
 @keyframes changeColorsNiceOrange {
   from {
     background-color: orange;
   }
   to {
     background-color: #660000;
   }
 }
 
 .niceGray {
   background-color: #D4D4D2;
 }
 
 .niceGray.darkenNiceGray {
   animation-duration: 1s;
   animation-name: changeColorsGray;
   animation-iteration-count: infinite;
 }
 
 @keyframes changeColorsNiceGray {
   from {
     background-color: gray;
   }
   to {
     background-color: #660000;
   }
 }
 
```

```javascript
  if ($("#checkbox").prop('checked') === true) {

      if ($('#checkbox').parent().css('color') === $($row[i]).css('background-color')) {
        $($row[i]).addClass("niceOrange");

        $($row[i]).toggleClass("darkenNiceOrange");
      }
    }
    if ($("#checkbox3").prop('checked') === true) {

      if ($('#checkbox3').parent().css('color') === $($row[i]).css('background-color')) {
        $($row[i]).addClass("niceGray");

        $($row[i]).toggleClass("darkenNiceGray");
      }
    }
    if ($("#checkbox4").prop('checked') === true) {

      if ($('#checkbox4').parent().css('color') === $($row[i]).css('background-color')) {


        $($row[i]).addClass("niceRed");
        $($row[i]).toggleClass("darkenNiceRed");
      }
    }

```

<> **Get Spesific line with click**
 
 <> **Each line has a button for displaying all columns's information on nice dialog box. This is illustrated below.**

![Lines][Lines]

[Lines]: https://i.itsosticky.com/1esevdf.png "Lines"

##Code Snippets

```html
<input type="image" name="WebRequestGridView$ctl02$ctl00" class="buttonClass cell-which-triggers-popup" src="http://i.imgur.com/7S84htL.png/" style="height:15px;width:15px;" />
```
```javascript

```


##### "The working flow of this projet*

<> **Select the department from first dropdown.**

<> **Select a person name from second dropdown.**

<> **Select the type of duty from radio boxes.**

<> **Create input boxes with "+" button.**

<> **And select dates.**

<> **Optional: You can remove any ranges of date with the choice you made by clicking pencil button.**


#**[Working demo](http://jsfiddle.net/hellyeah/pbc0u9cy/embedded/result/)**
