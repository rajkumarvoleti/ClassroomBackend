(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{471:function(t,e,a){"use strict";a.r(e);var i=a(16),n=a(322);class l extends n.a{constructor(...t){super(...t),Object(i.a)(this,"getFilterGraphQL",({type:t,value:e})=>{switch(t){case"is":return{[this.path]:e};case"not":return{[this.path+"_not"]:e};case"in":return{[this.path+"_in"]:e.split(",").map(t=>t.trim())};case"not_in":return{[this.path+"_not_in"]:e.split(",").map(t=>t.trim())}}}),Object(i.a)(this,"getFilterLabel",({label:t,type:e})=>{let a="";return["in","not_in"].includes(e)&&(a=" (comma separated)"),`${this.label} ${t.toLowerCase()}${a}`}),Object(i.a)(this,"formatFilter",({label:t,type:e,value:a})=>{let i=a;return["in","not_in"].includes(e)&&(i=a.split(",").map(t=>t.trim()).join(", ")),`${this.label} ${t.toLowerCase()}: ${i}`}),Object(i.a)(this,"getFilterTypes",()=>[{type:"is",label:"Is exactly",getInitialValue:()=>""},{type:"not",label:"Is not",getInitialValue:()=>""},{type:"in",label:"Is one of",getInitialValue:()=>""},{type:"not_in",label:"Is not one of",getInitialValue:()=>""}])}}e.default=l}}]);