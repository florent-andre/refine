"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},A=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(m,s(s({ref:t},A),{},{components:n})):a.createElement(m,s({ref:t},A))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),r=n(50740),s=n(13767);const i={title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",slug:"next-js-api-routes",authors:"michael",tags:["nextjs","nextjs-api-routes"],image:"/img/blog/2022-10-05-next-api-routes/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/next-js-api-routes",source:"@site/blog/2022-10-05-next-api-routes.md",title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"nextjs-api-routes",permalink:"/blog/tags/nextjs-api-routes"}],readingTime:8.92,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",slug:"next-js-api-routes",authors:"michael",tags:["nextjs","nextjs-api-routes"],image:"/img/blog/2022-10-05-next-api-routes/social.png",hide_table_of_contents:!1},prevItem:{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind"},nextItem:{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine"},relatedPosts:[{title:"Next.js 13 - What are the new features?",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.18,date:"2022-11-12T00:00:00.000Z"},{title:"NextAuth - Google And GitHub Authentications for Nextjs",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:14.03,date:"2022-08-18T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.175,date:"2022-11-13T00:00:00.000Z"}],authorPosts:[{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:16.75,date:"2022-08-23T00:00:00.000Z"},{title:"Next.js 13 - What are the new features?",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.18,date:"2022-11-12T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.815,date:"2022-09-04T00:00:00.000Z"}]},A={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What are Next.js API Routes?",id:"what-are-nextjs-api-routes",level:2},{value:"How to create API Routes in Next.js",id:"how-to-create-api-routes-in-nextjs",level:2},{value:"Dynamic API Routes",id:"dynamic-api-routes",level:2},{value:"API Routes custom configuration",id:"api-routes-custom-configuration",level:2},{value:"Typing API Routes with TypeScript",id:"typing-api-routes-with-typescript",level:2},{value:"Typing <code>request</code> and <code>response</code> objects",id:"typing-request-and-response-objects",level:4},{value:"Typing response data",id:"typing-response-data",level:4},{value:"Conclusion",id:"conclusion",level:2}],d=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const m={toc:u};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Next.js is a React framework and platform for building production-grade, static and server-side rendered applications, with a lot of useful built-in features and the ability to fully customize your page requests."),(0,o.kt)("p",null,"Next.js has a page-based routing system, and an API route feature which allows you to create APIs endpoints in a pages directory as though you're writing backend code. ",(0,o.kt)("strong",{parentName:"p"},"Next.js API Routes")," let you combine backend code along with your frontend code, thereby eliminating the need for extra codebases. With Next.js, building your RESTful or GraphQL APIs has never been easier!"),(0,o.kt)("p",null,"In this article, you'll learn how to set up Next.js API Routes and we'll explain some of their core features and how you can leverage them in your applications along the way. You'll also learn how to submit form data to an API route.  "),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-are-nextjs-api-routes"},"What are Next.js API Routes?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-create-api-routes-in-nextjs"},"How to create API Routes in Next.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dynamic-api-routes"},"Dynamic API Routes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#api-routes-custom-configuration"},"API Routes custom configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#typing-api-routes-with-typescript"},"Typing API Routes with TypeScript"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#typing-request-and-response-objects"},"Typing ",(0,o.kt)("inlineCode",{parentName:"a"},"request")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"response")," objects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#typing-response-data"},"Typing response data"))))),(0,o.kt)("h2",{id:"what-are-nextjs-api-routes"},"What are Next.js API Routes?"),(0,o.kt)("p",null,"Before you dive into ",(0,o.kt)("strong",{parentName:"p"},"Next.js API Routes")," let's provide a little background first. "),(0,o.kt)("p",null,"An Application Programming Interface (API) defines how two application or services communicate with each other using HTTP requests and responses. This communication usually involves the two applications exchanging data. For example a client-side web application requesting from a server application a list of users stored in a database. "),(0,o.kt)("p",null,"There are different methods of creating an API based on your requirements and use-cases. The most popular method around the web today is the Representational State Transfer (REST) method. The REST or ",(0,o.kt)("em",{parentName:"p"},"RESTful")," method typically involves a client application sending a request - a request can either be for sending data (GET request), submitting data (PUT request), or updating data (UPDATE request) to a server. Some other methods of creating APIs include Simple Object Access Protocol (SOAP), GraphQL, and so on."),(0,o.kt)("p",null,"To build an application in which you need data and resources provided and stored by an external source, you'll need an API to request for those resources. Basically, you need two different applications that communicate with each other for exchange of data. In modern web development, this is typically done by creating two different applications (assuming you own the application that stores the data), a client-side application that runs in the browser and a server-side application that runs on the server."),(0,o.kt)("p",null,"In essence, ",(0,o.kt)("strong",{parentName:"p"},"Next.js API Routes")," eliminate the need for creating an additional backend server in your full-stack web applications. With ",(0,o.kt)("strong",{parentName:"p"},"Next.js API Routes"),", you can access or store data in your database like you would if you were using a separate backend application. We will discuss how you can begin using this straightforward approach Next.js provides developers in the next section."),(0,o.kt)("h2",{id:"how-to-create-api-routes-in-nextjs"},"How to create API Routes in Next.js"),(0,o.kt)("p",null,"Creating API Routes in Next.js is similar to how you'd create a page route in Next.js. The only difference being that these API Routes are created in the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," folder found in the pages folder of your application and any file found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/api")," folder will be treated as an API endpoint. That is, if you have a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"example.js")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/api"),", you can access the API route in your code by making a request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/example"),"."),(0,o.kt)("p",null,"Let's go through an example:"),(0,o.kt)("p",null,"If you open the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," folder in your project root directory, you should see an ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," folder in it (assuming your project was bootstrapped with ",(0,o.kt)("inlineCode",{parentName:"p"},"create-next-app"),". If not, you'll need to create this folder yourself). The ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," folder contains an example API route named ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.js")," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/hello.js"',title:'"pages/api/hello.js"'},"export default function handler(req, res) {\n  res.status(200).json({ name: 'John Doe' })\n}\n")),(0,o.kt)("p",null,"Navigating to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000/api/hello")," in the browser or making a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to it returns the following JSON response:"),(0,o.kt)("div",{class:"img-container","align-items":"center"},(0,o.kt)("img",{src:r.Z,alt:"response"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Here's an explanation for the above code sample."),(0,o.kt)("p",null,"Every API route or endpoint must export a default function that handles the requests made to that endpoint. The function receives two parameters:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"req"),": An instance of ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpincomingmessage"},"http.IncomingMessage")," which also includes some built-in helpers - or middlewares - such as ",(0,o.kt)("inlineCode",{parentName:"p"},"req.body"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"req.query"),", and so on, for parsing the incoming request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"res"),": An instance of ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpserverresponse"},"http.ServerResponse")," which includes some Express.js-like helper methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"res.send"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"res.body"),", and so on"),(0,o.kt)("p",null,"These methods should be familiar if you've worked with Node.js and Express.js before."),(0,o.kt)("p",null,"In our example, we're exporting a default function named ",(0,o.kt)("inlineCode",{parentName:"p"},"handler")," - of course this can be named anything you like - and then we're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," server response object to return an HTTP status code and JSON data.  "),(0,o.kt)("p",null,"By default, every HTTP request to the endpoint using any of the HTTP request methods (GET, PUT, DELETE, and so on) will return the same response. To handle different methods in an API route we can write the handler function with ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," statement (you can also use methods like ",(0,o.kt)("inlineCode",{parentName:"p"},"if/else"),"- whichever works for you, no hard rules!), like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/hello.js"',title:'"pages/api/hello.js"'},"export default function handler(req, res) {\n  const requestMethod = req.method;\n  const body = JSON.parse(req.body);\n  switch (requestMethod) {\n    case 'POST':\n      res.status(200).json({ message: `You submitted the following data: ${body}` })\n      \n    // handle other HTTP methods\n    default:\n      res.status(200).json({ message: 'Welcome to API Routes!'})\n  }\n}\n")),(0,o.kt)("p",null,"Here's another example showing how you can submit data from a form in your application and send it to an API route using a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request method to save in a database."),(0,o.kt)("p",null,"The form in ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/post.js")," below sends a post data to an API route ",(0,o.kt)("inlineCode",{parentName:"p"},"api/post"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post.js"',title:'"pages/post.js"'},'import { useState } from "react";\n\nconst Post = () => {\n  const [title, setTitle] = useState("");\n  const [post, setPost] = useState("");\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    const postData = async () => {\n      const data = {\n        title: title,\n        post: post,\n      };\n\n      const response = await fetch("/api/post", {\n        method: "POST",\n        body: JSON.stringify(data),\n      });\n      return response.json();\n    };\n    postData().then((data) => {\n      alert(data.message);\n    });\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <label htmlFor="Title">Title</label>\n        <input\n          id="title"\n          type="text"\n          value={title}\n          onChange={(e) => setTitle(e.target.value)}\n        />\n      </div>\n      <div>\n        <label htmlFor="post">Post</label>\n        <input\n          id="post"\n          type="text"\n          value={post}\n          onChange={(e) => setPost(e.target.value)}\n        />\n      </div>\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n\nexport default Post;\n')),(0,o.kt)("p",null,"With the following code in ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/api/post.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/post.js"',title:'"pages/api/post.js"'},'export default function handler(req, res) {\n  const { title, post } = JSON.parse(req.body);\n\n  // Then save the post data to a database\n  res.status(200).json({ message: "Post created successfully" });\n}\n')),(0,o.kt)("hr",null),(0,o.kt)(d,{title:"Stop wasting your time copy/pasting your CRUD code all over your application!",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"dynamic-api-routes"},"Dynamic API Routes"),(0,o.kt)("p",null,"API Routes in Next.js can also be dynamic. This is similar to how regular dynamic pages work in Next.js. You can read more about dynamic routes ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/routing/dynamic-routes"},"here")," to understand their syntax.\nDynamic API Routes let us send response for different queries to an API endpoint. Let's go through an example."),(0,o.kt)("p",null,"Create a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"trivia")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages/api")," folder of your application. Then in the ",(0,o.kt)("inlineCode",{parentName:"p"},"trivia")," folder create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"[number].js"),". Your folder structure looks like : ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/api/trivia/[number].js"),". "),(0,o.kt)("p",null,"In this example, we're going to return a random fact from an external API (",(0,o.kt)("a",{parentName:"p",href:"http://numbersapi.com/"},"http://numbersapi.com/"),") about every number query we receive on the API endpoint. We'll use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/superagent"},"superagent")," as the HTTP client for making requests to the external API in our API route."),(0,o.kt)("p",null,"You can install it with the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install superagent\n")),(0,o.kt)("p",null,"Next, add the following code to ",(0,o.kt)("inlineCode",{parentName:"p"},"[number].js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/trivia/[number].js"',title:'"pages/api/trivia/[number].js"'},'const superagent = require("superagent");\n\nexport default function handler(req, res) {\n    const number = Number(req.query.number);\n\n  if (isNaN(number) || typeof number !== "number") {\n    res.status(400).send("Invalid request!!");\n  }\n  superagent.get(`http://numbersapi.com/${number}`).then((response) => {\n    res.status(200).send(response.text);\n  });\n}\n')),(0,o.kt)("p",null,"Now if you navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/trivia/34")," or any other random number at the end of the URL a random trivia should be generated for that number and a ",(0,o.kt)("inlineCode",{parentName:"p"},"400")," Bad Request will be returned if an invalid number is used. "),(0,o.kt)("p",null,"Here's a GIF showing an example:"),(0,o.kt)("div",{class:"img-container","align-items":"center"},(0,o.kt)("img",{src:s.Z,alt:"dynamic API routes"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"api-routes-custom-configuration"},"API Routes custom configuration"),(0,o.kt)("p",null,"In addition to the powerful features of API Routes, Next.js also allows for customization of their default configuration. The default configuration in every API route in Next.js can be customized by exporting a ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," object in the same file. ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," object contains all configuration options that are specific to every API route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/hello.js"',title:'"pages/api/hello.js"'},"export default function handler(req, res) {\n  res.status(200).json({ name: 'John Doe' })\n}\n\nexport const config = {\n  api: {\n    bodyParser: false, // Defaults to true. Setting this to false disables body parsing and allows you to consume the request body as stream or raw-body.\n    responseLimit: false, // Determines how much data should be sent from the response body. It is automatically enabled and defaults to 4mb.\n    externalResolver: true, // Disables warnings for unresolved requests if the route is being handled by an external resolver like Express.js or Connect. Defaults to false.\n  },\n}\n")),(0,o.kt)("p",null,"You can read more about other available configuration options ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/request-helpers#custom-config"},"here"),"."),(0,o.kt)("h2",{id:"typing-api-routes-with-typescript"},"Typing API Routes with TypeScript"),(0,o.kt)("p",null,"Next.js provides automatic types to ensure your API Routes are type-safe and involves zero configuration to set up. "),(0,o.kt)("p",null,"NOTE: You need to have integrated TypeScript in your Next.js project before using these features. Learn how to add TypeScript to your Next.js project ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/typescript"},"here"),"."),(0,o.kt)("h4",{id:"typing-request-and-response-objects"},"Typing ",(0,o.kt)("inlineCode",{parentName:"h4"},"request")," and ",(0,o.kt)("inlineCode",{parentName:"h4"},"response")," objects"),(0,o.kt)("p",null,"Here's how to provide types for the request and response objects with ",(0,o.kt)("inlineCode",{parentName:"p"},"NextApiRequest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NextApiResponse")," respectively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/api/hello.ts",title:"pages/api/hello.ts"},"import type { NextApiRequest, NextApiResponse } from 'next'\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  res.status(200).json({ name: 'John Doe' })\n}\n")),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h4",{id:"typing-response-data"},"Typing response data"),(0,o.kt)("p",null,"We can also type the response data returned from an API endpoint by adding types to ",(0,o.kt)("inlineCode",{parentName:"p"},"res: NextApiResponse"),"."),(0,o.kt)("p",null,"Using the example from dynamic routes section above, we can add types to the response from the API endpoint like below: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/trivia/[number].ts"',title:'"pages/api/trivia/[number].ts"'},'import type { NextApiRequest, NextApiResponse } from \'next\'\nconst superagent = require("superagent");\n\ntype ResponseData = string;\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {\n  const number = Number(req.query.number);\n\n  if (isNaN(number) || typeof number !== "number") {\n    res.status(400).send("Invalid request!!");\n  }\n  superagent.get(`http://numbersapi.com/${number}`).then((response) => {\n    res.status(200).send(response.text);\n  });\n}\n')),(0,o.kt)("p",null,"You can learn more about extending the ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"req")," objects with TypeScript ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/request-helpers#extending-the-reqres-objects-with-typescript"},"here"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this article we introduced you to ",(0,o.kt)("strong",{parentName:"p"},"API Routes in Next.js")," and how to use them to create API endpoints for your application. You learned how to add custom configurations to API Routes and also how to include typings among other things. Ready to get started with ",(0,o.kt)("strong",{parentName:"p"},"API Routes")," in your next project? Let's know what you build and feel free to reach out if you have any questions. Happy coding!"))}h.isMDXComponent=!0},13767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynamic-routes-e54f42fdd0e298113218b376ff15cb22.gif"},50740:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);