import{ai as r,aj as i,ak as o,ab as u,al as d}from"./index-21b55a35.js";const n=r({id:"pure-app",state:()=>{var e,t,s,a;return{sidebar:{opened:(t=(e=i.getItem("responsive-layout"))==null?void 0:e.sidebarStatus)!=null?t:o().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:(a=(s=i.getItem("responsive-layout"))==null?void 0:s.layout)!=null?a:o().Layout,device:u()?"mobile":"desktop",sortSwap:!1}},getters:{getSidebarStatus(){return this.sidebar.opened},getDevice(){return this.device}},actions:{TOGGLE_SIDEBAR(e,t){const s=i.getItem("responsive-layout");e&&t?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,s.sidebarStatus=!0):!e&&t?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,s.sidebarStatus=!1):!e&&!t&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,s.sidebarStatus=this.sidebar.opened),i.setItem("responsive-layout",s)},async toggleSideBar(e,t){await this.TOGGLE_SIDEBAR(e,t)},toggleDevice(e){this.device=e},setLayout(e){this.layout=e},setSortSwap(e){this.sortSwap=e}}});function p(){return n(d)}export{p as u};