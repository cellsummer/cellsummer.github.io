(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{421:function(t,e,a){"use strict";a.r(e);var s=a(1),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("This post explored two popular python packages for developing data driven web applications: Dash and Streamlit. Both of them are very capable of developing nice looking apps even for beginners.")])]),t._v(" "),a("h2",{attrs:{id:"streamlit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streamlit"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://Streamlit.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Streamlit"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"installation-and-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-quick-start"}},[t._v("#")]),t._v(" Installation and Quick Start")]),t._v(" "),a("p",[t._v("Installation is pretty standard with pip command:")]),t._v(" "),a("p",[a("code",[t._v("pip install streamlit")])]),t._v(" "),a("p",[t._v("During the installation, I noticed quite a few dependencies were installed (25+) but many of them seemed to be stable and popular packages.")]),t._v(" "),a("p",[t._v("The application coding can be hosted in a single "),a("code",[t._v(".py")]),t._v(" file. To run the application:")]),t._v(" "),a("p",[a("code",[t._v("streamlit run app.py")])]),t._v(" "),a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("p",[t._v("The typical usage of streamlit is to host simple data-driven applications with interactive user input. So usually you would expect a single page web application.")]),t._v(" "),a("h4",{attrs:{id:"themes-and-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themes-and-styles"}},[t._v("#")]),t._v(" Themes and Styles")]),t._v(" "),a("p",[t._v("Streamlit doesn't really provide any customization in terms of the visual presentation of the app. It doesn't allow to configure the theme, fonts, style,etc. I can see the merit of the design that have the developer really focusing on presenting the data instead of worrying anything about the front-end.")]),t._v(" "),a("h4",{attrs:{id:"widgets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets"}},[t._v("#")]),t._v(" Widgets")]),t._v(" "),a("p",[t._v("Streamlit supports standard widgets:")]),t._v(" "),a("ul",[a("li",[t._v("Text widgets: textbox, labels, code blocks and it supports Markdown syntax.")]),t._v(" "),a("li",[t._v("Interactive widgets: very handy for design user input interface, such as button, checkbox, radio(option box), slider, date/time selector, file uploader, etc.")]),t._v(" "),a("li",[t._v("Data display widgets: Streamlit supports pandas dataframe out of box. To visualize data, it also supports the popular charts which is powered by "),a("a",{attrs:{href:"https://matplotlib.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("matplotlib"),a("OutboundLink")],1),t._v(". So you can configure the charts based on your data and analytics. This really makes Streamlit great for its intended use.")]),t._v(" "),a("li",[t._v("Html Extension: Streamlit also allows to extend the functionality by adding html components. So technically you can include any JS powered html widgets.")])]),t._v(" "),a("p",[t._v("All widgets share the same pythonic way of syntax so the learning curve is really smooth.")]),t._v(" "),a("h4",{attrs:{id:"data-interaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-interaction"}},[t._v("#")]),t._v(" Data Interaction")]),t._v(" "),a("p",[t._v("By default, Streamlit will run the entire python script underneath whenever the coding changes or the input from the widgets changes. In more recent versions of Streamlit, it also allows to use the call back functionality to run specific functions related to the widget first. It also provides caching functionalities to boost the performance.")]),t._v(" "),a("h4",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),a("p",[t._v("Streamlit provides a very easy way to deploy the application on Github for free. It will put the application in hibernation if it is not actively accessed for a long period.")]),t._v(" "),a("h3",{attrs:{id:"stock-technical-analysis-app-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stock-technical-analysis-app-demo"}},[t._v("#")]),t._v(" Stock Technical Analysis App Demo")]),t._v(" "),a("p",[t._v("I tried using streamlit to develop a simple stock screening application using technical indicators.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/image/2021-07-20-SL-01.PNG",alt:"Streamlit Demo 01"}}),t._v(" "),a("img",{attrs:{src:"/image/2021-07-20-SL-02.PNG",alt:"Streamlit Demo 02"}})]),t._v(" "),a("h2",{attrs:{id:"dash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dash"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://plotly.com/dash/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dash"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"installation-and-quick-start-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-quick-start-2"}},[t._v("#")]),t._v(" Installation and Quick Start")]),t._v(" "),a("p",[t._v("The installation is pretty standard with "),a("code",[t._v("pip")]),t._v(". I also installed the dash bootstrap components which made it easier to build the app with consistent styles.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install dash\npip install dash-bootstrap-components\n")])])]),a("p",[t._v("To run the application, we can just run the "),a("code",[t._v("app.py")]),t._v(" file.")]),t._v(" "),a("h3",{attrs:{id:"features-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features-2"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("p",[t._v("Dash is based on the "),a("a",{attrs:{href:"https://flask.palletsprojects.com/en/2.0.x/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flask"),a("OutboundLink")],1),t._v(" framework and aims to build dashboard type of applications as its name suggests.")]),t._v(" "),a("p",[t._v("Working with Dash is more like working with Html but with python syntax. Every component of the app is configurable. And it is easy to assemble individual components in a container so that at the end of the day you will have a tree-like structure for you application layout.")]),t._v(" "),a("p",[t._v("With the bootstrap components, it is easier to use different themes and styles. There are also many widgets you can use out of box including side bars, navigation bars, search bars etc and all of them can be configured using css. While Streamlit is more like a GUI for data scientists, Dash is a full-stack web application framework specializing in dashboards and data presentation.")]),t._v(" "),a("h3",{attrs:{id:"premier-league-app-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#premier-league-app-demo"}},[t._v("#")]),t._v(" Premier League App Demo")]),t._v(" "),a("p",[t._v("I tried using Dash to develop a simple dashboard for premier league. Source code can found on my "),a("a",{attrs:{href:"https://github.com/cellsummer/premier-league-analytics",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github repos"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"/image/2021-07-20-DA-01.PNG",alt:"Dash Demo 01"}}),t._v(" "),a("img",{attrs:{src:"/image/2021-07-20-DA-02.PNG",alt:"Dash Demo 02"}})])])}),[],!1,null,null,null);e.default=i.exports}}]);