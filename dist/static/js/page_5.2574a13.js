webpackJsonp([5,13,15],{7:function(n,t,e){t=n.exports=e(1)(),t.push([n.id,".container{-ms-flex-wrap:wrap;flex-wrap:wrap;width:238px;margin-top:10px}.cell,.container{display:-ms-flexbox;display:flex}.cell{-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;width:25px;height:25px;border:1px solid #aaa;margin-right:-1px;margin-bottom:-1px}.cell:nth-child(3n){margin-right:0}.cell:nth-child(27n){margin-bottom:0}.cell-move{transition:transform 1s}","",{version:3,sources:["/./view/demo/sudoku.vue"],names:[],mappings:"AACA,WAGE,mBAAoB,AAChB,eAAgB,AACpB,YAAa,AACb,eAAiB,CAClB,AACD,iBAPE,oBAAqB,AACrB,YAAc,CAkBf,AAZD,MAGE,yBAA0B,AACtB,6BAA8B,AAClC,sBAAuB,AACnB,mBAAoB,AACxB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,kBAAmB,AACnB,kBAAoB,CACrB,AACD,oBACE,cAAgB,CACjB,AACD,qBACE,eAAiB,CAClB,AACD,WACE,uBAAyB,CAC1B",file:"sudoku.vue",sourcesContent:["\n.container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 238px;\n  margin-top: 10px;\n}\n.cell {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 25px;\n  height: 25px;\n  border: 1px solid #aaa;\n  margin-right: -1px;\n  margin-bottom: -1px;\n}\n.cell:nth-child(3n) {\n  margin-right: 0;\n}\n.cell:nth-child(27n) {\n  margin-bottom: 0;\n}\n.cell-move {\n  transition: transform 1s;\n}\n"],sourceRoot:"webpack://"}])},16:function(n,t,e){var i=e(7);"string"==typeof i&&(i=[[n.id,i,""]]);e(2)(i,{});i.locals&&(n.exports=i.locals)},38:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{cells:Array.apply(null,{length:81}).map(function(n,t){return{id:t,number:t%9+1}})}},methods:{shuffle:function(){this.cells=this.cells.sort(function(){return Math.random()-.5})}}}},54:function(n,t,e){var i,r;e(16),i=e(38);var l=e(64);r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),r.render=l.render,r.staticRenderFns=l.staticRenderFns,n.exports=i},64:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"xa-page"},[_h("button",{on:{click:shuffle}},["Shuffle"])," "," ",_h("transition-group",{staticClass:"container",attrs:{name:"cell",tag:"div"}},[_l(cells,function(n){return _h("div",{key:n.id,staticClass:"cell"},["\n      "+_s(n.number)+"\n    "])})])," ",_h("router-link",{attrs:{to:"/demo/pingtu"}},["拼图"])])},staticRenderFns:[]}}});
//# sourceMappingURL=page_5.2574a13.js.map