/*
 * @Description: file description
 * @Author: wangxg@yonyou.com
 * @Date: 2019-09-17 16:57:18
 * @LastEditTime: 2019-09-18 16:48:11
 * @LastEditors: wangxg@yonyou.com
 */
import * as immutable from 'immutable'
import Defines from './Defines';
import TableNames from './TableNames';
let { UiTypeDef, UiObjects } = Defines;
let _data = {
   Bill: {
      "type": "bill",
      "text": "单据信息",
      "description": "单据信息",
      "item": [
         'BillTemplate',
         'BillEntityList',
         'BillCommandList'
      ]
   },
   BillEntityList: {
      "type": "bill",
      "text": "实体清单",
      "description": "实体清单",
      "item": [
         'BillEntity'
      ]
   },
   BillCommandList: {
      "type": "bill",
      "text": "动作清单",
      "description": "动作清单",
      "item": [
         'BillCommand'
      ]
   },

   /*---------------通过代码补充item---------------*/
   BillTemplate: {
      "type": "bill",
      "text": "模板页面",
      "description": "模板页面",
      "item":  []
   },
   Toolbar: {
      "type": "container",
      "text": "工具栏",
      "description": "工具栏",
      "item":  []
   },
   /*---------------------------------------------*/

   BillEntity: {
      "type": "bill",
      "text": "实体",
      "description": "实体",
      "item":  []
   },
   BillCommand: {
      "type": "bill",
      "text": "动作",
      "description": "动作",
      "item":  []
   },

   ConvenientQuery: {
      "type": "container",
      "text": "查询列",
      "description": "",
      "item": [
      ]
   },
   
   ListHeader: {
      "type": "container",
      "text": "列表头部",
      "description": "",
      "item": [
         "ConvenientQuery",
         "Toolbar"
      ]
   },
   Table: {
      "type": "container",
      "text": "表格",
      "description": "",
      "item": [
         "Column" /*表格字段下可增加按钮但无反应*/
      ]
   },
   TreeTable: {
      "type": "container",
      "text": "树型表格",
      "description": "可增加下级容器命名为 toolbarMeta，疑似存在工具条，分析代码后是用于设置列的配置，但不知是那个容器",
      "item": [
         "Column" /*表格字段下可增加按钮但无反应*/
      ]
   },
   RptTable: {
      "type": "container",
      "text": "报表表格",
      "description": "",
      "item": [
         "Column" /*表格字段下可增加按钮但无反应*/
      ]
   },
   CardHeader: {
      "type": "container",
      "text": "卡片头部",
      "description": "",
      "item": [
         "Toolbar"
      ]
   },
   GroupContainer: {
      "type": "container",
      "text": "卡片组",
      "description": "具有标题形态的卡片，下面可以放很多东西。",
      "item": [
         "ListHeader",
         "ConvenientQuery",
         "Table",
         "TreeTable",
         "RptTable",
         "CardHeader",
         "Group",
         "GroupContainer",
         "DIV",
         "Title",
         "Footer",
         "SearchTree",
         "LineTabs",
         "TabPage",
         "Toolbar"
      ]
   },
   Group: {
      "type": "container",
      "text": "卡片",
      "description": "内部是简单栅格的容器，在 metaui/util.js 里临时组装出来的。",
      "item": [
         "ListHeader",
         "ConvenientQuery",
         "Table",
         "TreeTable",
         "RptTable",
         "CardHeader",
         "GroupContainer",
         "Group",
         "DIV",
         "Title",
         "Footer",
         "SearchTree",
         "LineTabs",
         "TabPage",
         "Toolbar"
      ]
   },
   DIV: {
      "type": "container",
      "text": "DIV块",
      "description": "内部是简单栅格的容器，在 metaui/util.js 里临时组装出来的。",
      "item": [
         "ListHeader",
         "ConvenientQuery",
         "Table",
         "TreeTable",
         "RptTable",
         "CardHeader",
         "GroupContainer",
         "Group",
         "DIV",
         "Title",
         "Footer",
         "SearchTree",
         "LineTabs",
         "TabPage",
         "Toolbar"
      ]
   },
   Title: {
      "type": "container",
      "text": "Title",
      "description": "内部是简单栅格的容器，什么都放不了。",
      "item":  []
   },
   Footer: {
      "type": "container",
      "text": "底部栏",
      "description": "只能放 Input 和 Select 组件，其他的都放不了。",
      "item":  []
   },
   SearchTree: {
      "type": "container",
      "text": "搜索树",
      "description": "什么都放不了",
      "item":  []
   },
   LineTabs: {
      "type": "container",
      "text": "多页签",
      "description": "类似可以给每个子容器携带工具栏的 tabs，子容器必须有 container，否则该子容器不会被渲染 ，自身不能设置 toolbar ",
      "item": [
         "ListHeader",
         "ConvenientQuery",
         "Table",
         "TreeTable",
         "RptTable",
         "CardHeader",
         "GroupContainer",
         "Group",
         "DIV",
         "LineTabs",
         "TabPage"
      ]
   },
   TabPage: {
      "type": "container",
      "text": "多卡片页签",
      "description": "就 Tabs 组件，除了 Group 组件能正常放置在Tabs下，其他组件都是在 Tabs 组件之前，这里的样式有问题。",
      "item": [
         "ListHeader",
         "GroupContainer",
         "Group"
      ]
   }
};
for(let key in UiObjects){
   let uiObj = UiObjects[key];
   if(uiObj.uidefault && uiObj.uidefault.uiTable == TableNames.BillTplGroupBase){
      _data[UiTypeDef.BillTemplate].item.push(uiObj.uitype)
   }

   if(uiObj.uidefault&&uiObj.uidefault.uiTable == TableNames.BillToolbarItem){
      _data[UiTypeDef.Toolbar].item.push(uiObj.uitype)
   }
}



export default immutable.fromJS(_data);