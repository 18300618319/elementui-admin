<style lang="less">
    @import '../styles/menu.less';
</style>

<template>
    <el-menu ref="sideMenu" :default-active="$route.name" :default-openeds="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
        <template v-for="item in menuList">
            <el-menu-item v-if="item.children.length<=1" :name="item.children[0].name" :key="item.path">
                <i :class="item.icon" :size="iconSize" :key="item.path"></i>
                <span class="layout-text" :key="item.path">{{ itemTitle(item) }}</span>
            </el-menu-item>

            <el-submenu v-if="item.children.length > 1" :name="item.name" :key="item.path">
                <template slot="title">
                    <i :class="item.icon" :size="iconSize"></i>
                    <span class="layout-text">{{ itemTitle(item) }}</span>
                </template>
                <template v-for="child in item.children">
                    <el-menu-item :name="child.name" :key="child.name">
                        <i :class="child.icon" :size="iconSize" :key="child.name"></i>
                        <span class="layout-text" :key="child.name">{{ child.title }}</span>
                    </el-menu-item>
                </template>
            </el-submenu>
        </template>
    </el-menu>
</template>

<script>
export default {
    name: 'sidebarMenu',
    props: {
        menuList: Array,
        iconSize: Number,
        menuTheme: {
            type: String,
            default: 'dark'
        },
        openNames: {
            type: Array
        }
    },
    methods: {
        changeMenu (active) {
            this.$emit('on-change', active);
        },
        itemTitle (item) {
            if (typeof item.title === 'object') {
                return this.$t(item.title.i18n);
            } else {
                return item.title;
            }
        }
    },
    updated () {
        this.$nextTick(() => {
            if (this.$refs.sideMenu) {
                // this.$refs.sideMenu.updateOpened();
            }
        });
    }

};
</script>
