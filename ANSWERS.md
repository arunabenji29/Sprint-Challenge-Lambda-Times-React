
- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    Proptypes are used for typechecking in order to catch a bugs. It is a built in Typechecking in React. To run the typechecking on Props for a component, the Proptypes property is used. It has a range of validators to make sure the data you receive is valid. It has String, number, boolean, object, array, function validators and etc.


- [ ] Describe a life-cycle event in React?

    The App initially runs it has empty data, followed by the 'component did mount' to get the data from the API. This runs only once. Next the App renders to the DOM. Every time the data changes the 'Componentwillupdtae' will run and re-render the data to the DOM. The 'Component will unmount' is used in situation where you have to disconnect from the API.

- [ ] Explain the details of a Higher Order Component?

    A higher order component can be used to call a function inside a function. It allows the capability of reusing the component logic. In other words, it receive a component as an argument and return a new component.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

    The three way to style are Inline styles, Styled components and Regular css which can be separately stored in an external file.

    Inline styles are used, when you would like to define the styles of an element inside the element. This is easy to see javascript and inline styling at the same place.

    The Regular CSS is managed in a separate file. Your code can be kept clean. All the CSS can ne even kept in the same place.

    The styled components are used in react. They provide reusability of the styled components unlike the rest.