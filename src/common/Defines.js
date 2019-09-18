/**
 * UI枚举定义
 */
//常用
import TableNames from './TableNames';

let UiTypeDef = {};//定义uitype值,uitype标识元素类型
let UiTitleDef = {};//定义uititle值,uititle标识元素名称
let UiDefaultDef = {};//定义uidefault值,uidefault预置元素默认属性值
let UiIconDef = {};//定义uiicon值,uiicon为元素图标名称

UiTypeDef.Bill = 'Bill';
UiTitleDef.Bill = '单据信息';
UiDefaultDef.Bill = {uiTable:TableNames.BillBase};

UiTypeDef.BillEntityList = 'BillEntityList';
UiTitleDef.BillEntityList = '实体清单';
UiDefaultDef.BillEntityList = {uiTable:TableNames.BillEntityBaseList};

UiTypeDef.BillEntity = 'BillEntity';
UiTitleDef.BillEntity = '实体';
UiDefaultDef.BillEntity = {uiTable:TableNames.BillEntityBase};

UiTypeDef.BillCommandList = 'BillCommandList';
UiTitleDef.BillCommandList = '动作清单';
UiDefaultDef.BillCommandList = {uiTable:TableNames.BillCommandList};

UiTypeDef.BillCommand = 'BillCommand';
UiTitleDef.BillCommand = '动作';
UiDefaultDef.BillCommand = {uiTable:TableNames.BillCommand};

UiTypeDef.BillTemplate = 'BillTemplate';
UiTitleDef.BillTemplate = '模板页面';
UiDefaultDef.BillTemplate = {uiTable:TableNames.BillTemplateBase};

//--------容器类------------
// UiTypeDef.billtplgroup_base = 'BillTplGroupBase';
// UiTitleDef.billtplgroup_base = '通用容器';

// UiTypeDef.Container= 'BillTplGroupBase';
// UiTitleDef.Container =  '容器';
// UiDefaultDef.Container = {cType:'Container'};

UiTypeDef.Table= 'Table';
UiTitleDef.Table =  '表格';
UiDefaultDef.Table = {uiTable:TableNames.BillTplGroupBase,cType:'Table'};

UiTypeDef.TreeTable= 'TreeTable';
UiTitleDef.TreeTable =  '树型表格';
UiDefaultDef.TreeTable = {uiTable:TableNames.BillTplGroupBase,cType:'TreeTable'};

UiTypeDef.RptTable= 'RptTable';
UiTitleDef.RptTable =  '报表表格';
UiDefaultDef.RptTable = {uiTable:TableNames.BillTplGroupBase,cType:'RptTable'};

UiTypeDef.GroupContainer= 'GroupContainer';
UiTitleDef.GroupContainer =  '卡片组';
UiDefaultDef.GroupContainer = {uiTable:TableNames.BillTplGroupBase,cType:'GroupContainer'};

UiTypeDef.Group= 'Group';
UiTitleDef.Group =  '卡片';
UiDefaultDef.Group = {uiTable:TableNames.BillTplGroupBase,cType:'Group'};

UiTypeDef.ListHeader= 'ListHeader';
UiTitleDef.ListHeader =  '列表头部';
UiDefaultDef.ListHeader = {uiTable:TableNames.BillTplGroupBase,cType:'ListHeader'};

UiTypeDef.CardHeader= 'CardHeader';
UiTitleDef.CardHeader =  '卡片头部';
UiDefaultDef.CardHeader = {uiTable:TableNames.BillTplGroupBase,cType:'CardHeader'};

// 已过期
// UiTypeDef.StatusBar= 'BillTplGroupBase; //只能放在CardHeader下，无子控件
// UiTitleDef.StatusBar =  '卡片头部-状态栏';
// UiDefaultDef.StatusBar = {cType:'StatusBar'};

// 已过期
// UiTypeDef.MainTitle= 'BillTplGroupBase;//只能放在CardHeader下，支持icon、tag、title
// UiTitleDef.MainTitle =  '卡片头部标题';
// UiDefaultDef.MainTitle = {cType:'MainTitle'};

// 已过期
// UiTypeDef.ProcessGroup= 'BillTplGroupBase;//只能放在CardHeader下，无子控件
// UiTitleDef.ProcessGroup =  '卡片头部-进度组';
// UiDefaultDef.ProcessGroup = {cType:'ProcessGroup'};


UiTypeDef.Title= 'Title';
UiTitleDef.Title =  '标题栏';
UiDefaultDef.Title = {uiTable:TableNames.BillTplGroupBase,cType:'Title'};

UiTypeDef.Footer= 'Footer';
UiTitleDef.Footer =  '底部栏';
UiDefaultDef.Footer = {uiTable:TableNames.BillTplGroupBase,cType:'Footer'};

UiTypeDef.ConvenientQuery= 'ConvenientQuery';
UiTitleDef.ConvenientQuery = '查询栏';
UiDefaultDef.ConvenientQuery = {uiTable:TableNames.BillTplGroupBase,cType:'ConvenientQuery'};

UiTypeDef.SearchTree= 'SearchTree';
UiTitleDef.SearchTree = '搜索树';
UiDefaultDef.SearchTree = {uiTable:TableNames.BillTplGroupBase,cType:'SearchTree'};

UiTypeDef.LineTabs= 'LineTabs';
UiTitleDef.LineTabs =  '多页签';
UiDefaultDef.LineTabs = {uiTable:TableNames.BillTplGroupBase,cType:'LineTabs'};

UiTypeDef.CardTabs= 'CardTabs';
UiTitleDef.CardTabs =  '多卡片页签';
UiDefaultDef.CardTabs = {uiTable:TableNames.BillTplGroupBase,cType:'TabPage'};

UiTypeDef.Div= 'Div';
UiTitleDef.Div =  'DIV块';
UiDefaultDef.Div = {uiTable:TableNames.BillTplGroupBase,cType:'Div'};
//--------容器类------------end


UiTypeDef.Toolbar = 'Toolbar';
UiTitleDef.Toolbar = '工具栏';
UiDefaultDef.Toolbar = {uiTable:TableNames.BillToolbar};

//--------工具栏控件-----------
// UiTypeDef.bill_toolbaritem = 'BillToolbarItem';
// UiTitleDef.bill_toolbaritem = '通用工具控件';

UiTypeDef.PrimaryButton = 'PrimaryButton';
UiTitleDef.PrimaryButton = '主按钮';
UiDefaultDef.PrimaryButton = {uiTable:TableNames.BillToolbarItem,type:'PrimaryButton'};

UiTypeDef.Button = 'Button';
UiTitleDef.Button = '按钮';
UiDefaultDef.Button = {uiTable:TableNames.BillToolbarItem,type:'Button'};

UiTypeDef.DropdownButton = 'DropdownButton';
UiTitleDef.DropdownButton = '下拉按钮';
UiDefaultDef.DropdownButton = {uiTable:TableNames.BillToolbarItem,type:'DropdownButton'};

UiTypeDef.Spliter = 'Spliter';
UiTitleDef.Spliter = '分隔栏';
UiDefaultDef.Spliter = {uiTable:TableNames.BillToolbarItem,type:'Spliter'};

UiTypeDef.PrintButton = 'PrintButton';
UiTitleDef.PrintButton = '打印按钮';
UiDefaultDef.PrintButton = {uiTable:TableNames.BillToolbarItem,ype:'PrintButton'};

UiTypeDef.Tag = 'Tag';
UiTitleDef.Tag = '标签';
UiDefaultDef.Tag = {uiTable:TableNames.BillToolbarItem,type:'Tag'};

UiTypeDef.Icon = 'Icon';
UiTitleDef.Icon = '图标';
UiDefaultDef.Icon = {uiTable:TableNames.BillToolbarItem,type:'Icon'};

//--------工具栏控件-----------end


//--------字段控件-------------
// UiTypeDef.billitem_base = 'BillItemBase';
// UiTitleDef.billitem_base = '通用显示控件';

UiTypeDef.Column = 'Column';
UiTitleDef.Column = '表格列';
UiDefaultDef.Column = {uiTable:TableNames.BillItemBase,cControlType:'Column'};

UiTypeDef.Input = 'Input';
UiTitleDef.Input = '文本框';
UiDefaultDef.Input = {uiTable:TableNames.BillItemBase,cControlType:'Input'};

UiTypeDef.InputNumber = 'InputNumber';
UiTitleDef.InputNumber = '数字框';
UiDefaultDef.InputNumber = {uiTable:TableNames.BillItemBase,cControlType:'InputNumber'};

UiTypeDef.CheckBox = 'CheckBox';
UiTitleDef.CheckBox = '多选框';
UiDefaultDef.CheckBox = {uiTable:TableNames.BillItemBase,cControlType:'CheckBox'};

UiTypeDef.Radio = 'Radio';
UiTitleDef.Radio = '单选框';
UiDefaultDef.Radio = {uiTable:TableNames.BillItemBase,cControlType:'Radio'};

UiTypeDef.Refer = 'Refer';
UiTitleDef.Refer = '参照框';
UiDefaultDef.Refer = {uiTable:TableNames.BillItemBase,cControlType:'Refer'};

UiTypeDef.ListRefer = 'ListRefer';
UiTitleDef.ListRefer = '列表照';
UiDefaultDef.ListRefer = {uiTable:TableNames.BillItemBase,cControlType:'ListRefer'};

UiTypeDef.TreeRefer = 'TreeRefer';
UiTitleDef.TreeRefer = '树参照';
UiDefaultDef.TreeRefer = {uiTable:TableNames.BillItemBase,cControlType:'TreeRefer'};

UiTypeDef.Select = 'Select';
UiTitleDef.Select = '下拉枚举';
UiDefaultDef.Select = {uiTable:TableNames.BillItemBase,cControlType:'Select'};

UiTypeDef.DatePicker = 'DatePicker';
UiTitleDef.DatePicker = '日期框';
UiDefaultDef.DatePicker = {uiTable:TableNames.BillItemBase,cControlType:'DatePicker'};

UiTypeDef.TimePicker = 'TimePicker';
UiTitleDef.TimePicker = '时间框';
UiDefaultDef.TimePicker = {uiTable:TableNames.BillItemBase,cControlType:'TimePicker'};

UiTypeDef.TimeRangePicker = 'TimeRangePicker';
UiTitleDef.TimeRangePicker = '时间范围';
UiDefaultDef.TimeRangePicker = {uiTable:TableNames.BillItemBase,cControlType:'TimeRangePicker'};

//--------字段控件-------------end



//-------------组装成对象集合-------------
let UiObjects = {};
for (let key in UiTypeDef) {
    UiObjects[key] = UiObjects[key] || {};
    UiObjects[key].uitype = UiTypeDef[key]
}
for (let key in UiTitleDef) {
    UiObjects[key] = UiObjects[key] || {};
    UiObjects[key].uititle = UiTitleDef[key]
}
for (let key in UiIconDef) {
    UiObjects[key] = UiObjects[key] || {};
    UiObjects[key].uiicon = UiIconDef[key]
}
for (let key in UiDefaultDef) {
    UiObjects[key] = UiObjects[key] || {};
    UiObjects[key].uidefault = UiDefaultDef[key]
}
//-------------组装成对象集合-------------end
export default  {
    UiTypeDef,
    UiTitleDef,
    UiDefaultDef,
    UiIconDef,
    UiObjects
};
