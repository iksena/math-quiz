This is a sample React web app to displat a math quiz with formula and image.
It implements the following libraries:
- [React Markdown](https://github.com/rexxars/react-markdown)  
- [React KaTeX](https://github.com/talyssonoc/react-katex)  
- [Remark Math](https://github.com/remarkjs/remark-math)  
  
The app implements the following data structure for a question
```javascript
question: {
 content: string,
 answers: [
  {
   content: string
   answer_option: {
    name: string
   }
  }
 ]
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
