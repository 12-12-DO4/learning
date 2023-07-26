## Form Elements
```HTML
<form action="my_action_page"> 
  <label for="uname">Username:</label> 
  <br> 
  <input type="text" id="uname" name="username"> 
  <br> 
  <label for="pwd">Password:</label> 
  <br> 
  <input type="password" id="pwd" name="pwd"> 
  <br><br> 
  <input type="submit" value="Login"> 
</form> 
```
Two input types, text and password, as it displays in the browser.

*Note how the type password hides the user input.*

- `<label>`

Defines a label for an element. It has an attribute `for`, the value of which should be equal to the id attribute of the element it is associated with. Note how in the example above, the `<label>` is associated with the `<input>` using its id value. 

- `<select>`

Defines a drop-down list of options presented to the user. It has a couple of attributes: 
- `Form` the id of the form in which the drop-down appears 
- `Name` specifies the name of the control 
- `multiple` Boolean attribute, when specified, indicates if a user can select multiple options out of the list 
- `required` indicates if the user is required to select an option before submitting a form 
- `size` mentions the number of visible options in a drop-down list 

The options in a drop-down list are defined using the `<option>` element inside `<select>`. Note the example in the `<option>` description below. 


- `<textarea>`

Defines a multi-line input field, typically to allow the user to input longer textual data. The common attributes for this element include:

- `cols` defines the width of the text area, the default value is `20`
- `form` the form element the text area is associated with
- `maxlength` when specified, limits the maximum number of characters that can be entered in the text area
- `minlength` the minimum number of characters that the user should enter 
- `readonly` once set, the user cannot modify the contents 
- `rows` defines the number of visible text lines for the text area

The following line of code defines a text area of 10 visible lines and nearly 30 characters wide where the user can input a maximum of 200 characters: 
```HTML
<textarea name="response" rows="10" cols="30" maxlength=”200”> 

</textarea>
```

- `<button>`

Defines a clickable button. The onclick attribute defines the behavior when the button is clicked by the user. For example, in the code below, an alert message is shown to the user. 
```HTML
<button type="button" onclick="alert('You just clicked!')">Click Me! 
</button> 
```

- `<fieldset>` 

Used to group related input elements in a form. For instance, elements related to the user’s personal information and educational qualification can be grouped separately in two field sets. 

- `<legend>`

Defines a caption for the `<fieldset>` element. For example: 
```HTML
<fieldset> 
  <legend>Personal Info</legend> 
  <label for="fname">First name:</label><br> 
  <input type="text" id="fname" name="fname" value="John"><br> 
  <label for="lname">Last name:</label><br> 
  <input type="text" id="lname" name="lname" value="Doe"><br> 
</fieldset> 
```
```HTML
<fieldset> 
  <legend>Qualificaiton</legend> 
  <label for="pdegree">Primary degree:</label><br> 
  <input type="text" id="pdegree" name="degree" value="Masters"><br> 
  <label for="fos">Last name:</label><br> 
  <input type="text" id="fos" name="field" value="Psychology"><br> 
</fieldset>
```

- `<datalist>`

Specifies a list of pre-defined options for an input element. It differs from `<select>` since the user can still provide textual or numeric input other than the listed options. 
```HTML
<form action="/my_action_page"> 
  <label for="flowers">Favourite flower:</label><br> 
  <input list="flowers" name="flowers"> 
  <datalist id="flowers"> 
    <option value="Rose"> 
    <option value="Lily"> 
    <option value="Tulip"> 
    <option value="Daffodil"> 
    <option value="Orchid"> 
  </datalist> 
  ... 
</form>
```

- `<output>`

Represents the result of a calculation (typically the output of a script) or the outcome of the user action. 

- `<option>`

Defines an option for the drop-down list. The following code example demonstrates how a simple list can be defined, with the rendered view below the code block. 
```HTML
<label for="course">Choose a course:</label><br> 
<select id="course" name="courselist"> 
  <option value="html">HTML Introduction</option> 
  <option value="css">Styling with CSS</option> 
  <option value="js">JavaScript</option> 
  <option value="react">React Basics</option> 
</select> 
```

By default, the first item in the drop-down list is selected. To define a pre-selected option, add the selected attribute to the option. 

- `<optgroup>`

Defines a group of related options in a drop-down list. Its attribute label names the group.

## Validation by element type and attributes
HTML allows you to do simple client-side validation 
like in forms it has several input types that are validated by the web browser:
- `email` is used for email addresses
- `tel` for telephone numbers
- `url` for URLs such as www.data.com
- `date` for date values
- `time` for time values
- `number` for numeric values
- `range` for numeric values which have a minimum and maximum value
- `color` for color selection

if user makes mistakes on a user account form when entering a telephone number and URL, the browser will validate the entered data against the reqs of the input type and provide user feedback

### Interactive form elements
- `required`

Denotes a mandatory input that the user can’t leave empty. It can be used with any input type, like password, radio, text and so on. 
```HTML
<input type="text" id="firstName" name="firstName" required>
```

- `maxlength`

Specifies the maximum length of a text input, in other words, the maximum number of characters that can be entered for a specific field. If provided, it will prevent the user from entering more characters than the limit.
```HTML
<input type="text" id="description" name="description" maxlength="50">
```

- `minlength`

Specifies the minimum length of a text input. If set, the input will not accept fewer characters than those specified.
```HTML
<input type="password" id="password" name="password" minlength="8">
```

- `min` and `max` attributes

Determine the minimum and maximum values allowed for an input field. They are usually applied to numerical text inputs, range inputs or dates.
```HTML
<input type="number" id="quantity" name="quantity" min="1" max="10">
<input type="range" id="volume" name="volume" min="1" max="100">
```

- `multiple`

Indicates that the user can enter more than one value in a single input field. This attribute can only be used for email and file input types. 
```HTML
<input type="file" id="gallery" name="gallery" multiple>
```

- `Pattern`

Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a regular expression to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK. 
```HTML
<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” >
```

## Input types
- `button`

This displays a clickable button and it’s mostly used in HTML forms to activate a script when clicked. `<input type="button" value="Click me" onclick="msg()" />`

Keep in mind you can also define buttons with the `<button>` tag, with the added benefit of being able to place content like text or images inside the tag.
```HTML
<button onclick="alert('Are you sure you want to continue?')"> 
    <img src="https://yourserver.com/button_img.jpg" 
        alt="Submit the form" height="64" width="64">
 </button> 
```

- `checkbox`

Defines a check box allowing single values to be selected or deselected. They are used to let a user select one or more options of a limited number of choices.
```HTML
<input type="checkbox" id="dog" name="dog" value="Dog">
<label for="dog">I like dogs</label>
<input type="checkbox" id="cat" name="cat" value="Cat">
<label for="cat">I like cats</label>
```

- `radio`

Displays a radio button, allowing only a single value to be selected out of multiple choices. They are normally presented in radio groups, which is a collection of radio buttons describing a set of related options that share the same `name` attribute.
```HTML
<input type="radio" id="light" name="theme" value="Light"> 
<label for="light">Light</label> 
<input type="radio" id="dark" name="theme" value="Dark"> 
<label for="dark">Dark</label> 
```

- `submit`

Displays a submit button for submitting all values from an HTML form to a form-handler, typically a server. The form-handler is specified in the form’s `action` attribute:
```HTML
<form action="myserver.com" method="POST">
  …
<input type="submit" value="Submit" />
</form>
```

- `text`

Defines a basic single-line text field that a user can enter text into. 
```HTML
<label for="fname">First name:</label> 
<input type="text" id="fname" name="fname"> 
```

- `password`

Defines a single-line text field whose value is obscured, suited for sensitive information like passwords.
```HTML
<label for="pwd">Password:</label> 
<input type="password" id="pwd" name="pwd">
```

- `date`

Displays a control for entering a date with no time (year, month and day).
```HTML
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```

- `datetime-local`

Defines a control for entering a date and time, including the year, month and day, as well as the time in hours and minutes.
```HTML
<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime">
```

- `email`

Defines a field for an email address. It’s similar to a plain text input, with the addition that it validates automatically when submitted to the server.
```HTML
<label for="email">Enter your email:</label>
<input type="email" id="email" name="email">
```

- `file`

Displays a control that lets the user select and upload a file from their computer. To define the types of files permissible you can use the `accept` attribute. Also, to enable multiple files to be selected, add the `multiple` attribute.
```HTML
<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile">
```

- `hidden`

Defines a control that is not displayed but whose value is still submitted to the server.
```HTML
<input type="hidden" id="custId" name="custId" value="3487">
```

- `image`

Defines an image as a graphical submit button. You should use the `src` attribute to point to the location of your image file.
```HTML
<input type="image"src="submit_img.png" alt="Submit" width="48" height="48">
```

- `number`

Defines a control for entering a number. You can use attributes to specify restrictions, such as min and max values allowed, number intervals or a default value.
```HTML
<input type="number" id="quantity" name="quantity" min="1" max="5">
```

- `range`

Displays a range widget for specifying a number between two values. The precise value, however, is not considered important. This is typically represented using a slider or dial control. To define the range of acceptable values, use the `min` and `max` properties.
```HTML
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">
```

- `reset`

Displays a button that resets the contents of the form to their default values.
```HTML
<input type="reset">
```

- `search`

Defines a text field for entering a search query. These are functionally identical to text inputs, but may be styled differently depending on the browser.
```HTML
<label for="gsearch">Search in Google:</label>
<input type="search" id="gsearch" name="gsearch">
```

- `time`

Displays a control for entering a time value in hours and minutes, with no time zone.
```HTML
<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">
```

- `tel`

Defines a control for entering a telephone number. Browsers that do not support `tel` fall back to standard text input. You can optionally use the `pattern` field to perform validation.
```HTML
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```

- `url`

Displays a field for entering a text URL. It works similar to a text input, but performs automatic validation before being submitted to the server.
```HTML
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```

- `week`

Defines a control for entering a date consisting of a week-year number and a year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.
```HTML
<label for="week">Select a week:</label>
<input type="week" id="week" name="week">
```

- `month`

Displays a control for entering a month and year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.
```HTML
<label for="bdaymonth">Birthday (month and year):</label>
<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">
```