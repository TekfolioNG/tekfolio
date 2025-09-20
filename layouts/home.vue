<template>
  <HomeNavbar v-if="$route.path !== '/careers'"></HomeNavbar>
  <slot></slot>
  <HomeFooter></HomeFooter>
</template>