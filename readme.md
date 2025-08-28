### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

“The difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll is:”

getElementById will select only the element whose name is set by Id. That is, it will give you the element that was set with that Id.for example getElementById('title).

getElementByClassName will select only the element whose name is set by class. That is, it will give you  All the elements that was set with same class Name. that is, if there is a multiple element have same class name it's select all the element by using class name.

querySelector will select the element whose name is set by tag or id or class. but for id and class need to add before name # or . like querySelector("#id") or querySelector(".class"). also it will select first element of the matches tag,id or class. that is, not select multiple element in single time it's not work like getElementByClassName. 

querySelectorAll will select all element by using match class name or id or tag.that is, it will give you all element who matches by tag,id, or class.for example if you see querySelectorAll("div") it will give you all div tag element. 


### 2. How do you **create and insert a new element into the DOM**?
const container = document.getElementById("container")
const addNewElement = document.createElement('div')
    addNewElement.innerHTML = `
        <div><p>hello Bole Chole Gelo</p></div>
    `
    container.appendChild(addNewElement)

### 3. What is **Event Bubbling** and how does it work?
Event bubbling means an event on a child element bubbles up to its parent elements. in the DOM an event starts from the innermost child and propagates up through each parent until it reaches the topmost element.that is, when you click innermost child it will bubbling up his parent and the parent of parent his parent and so on until the parents are finished.


### 4. What is **Event Delegation** in JavaScript? Why is it useful?
Event delegation is a method in JavaScript where an event listener is attached to a parent element and the events from its child elements are caught through event bubbling. For example, if an event listener is attached to a ul, any click on an li can be caught. as a result there's no need to attach events to each individual child, no need to write extra code, the code becomes smaller, and the performance is faster.

### 5. What is the difference between **preventDefault() and stopPropagation()** methods?
The difference between preventDefault() and stopPropagation() is:

preventDefault() stops the browser’s default behavior.
For example, if you use a "click" event listener on a form, the console might not show your values because the form’s default behavior is to refresh the page. By using event.preventDefault(), you prevent this default action, allowing you to see the values in the console.

stopPropagation() stops the event from bubbling up through the DOM.
For example, if both a child element and its parent have click events, clicking the child normally triggers both the child’s and the parent’s events. This can cause unwanted behavior. Using event.stopPropagation() prevents the event from reaching the parent, so only the child’s event is triggered.