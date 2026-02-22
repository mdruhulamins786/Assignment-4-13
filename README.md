Project Live Link:- https://mdruhulamins786.github.io/Assignment-4-13/


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans:- * Use getElementById for a unique element.
         * Use getElementsByClassName for multiple elements by class (but it’s live).
         * Use querySelector / querySelectorAll for flexibility with CSS selectors.
         * If you want modern, convenient looping, querySelectorAll + forEach is often preferred over getElementsByClassName.
   
2. How do you create and insert a new element into the DOM?
   Ans:- elements into the DOM in JavaScript involves a few clear steps: create the element, set its content/attributes.
   
3. What is Event Bubbling? And how does it work?
   Ans:- In simpler terms: the event bubbles from child → parent → grandparent → … → document.This happens for most events, like click, keyup, mouseover, etc.
   
4. What is Event Delegation in JavaScript? Why is it useful?
   Ans:- It works because of event bubbling—events on children bubble up to the parent, which can then handle them.
   
5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: Stops the default behavior of an element from happening.
        Example: Prevent a link from navigating, or prevent a form from submitting.
        Does NOT stop the event from bubbling.
