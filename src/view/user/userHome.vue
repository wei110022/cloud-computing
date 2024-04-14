<script setup lang="ts">
import { CircleUser,  Package2 } from 'lucide-vue-next'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {ref} from "vue";

const mode = useColorMode()
let tk = ref("server")
function changeBg(){
  if(mode.store.value == 'light'){
    mode.store.value = 'dark'
  }else {
    mode.store.value = 'light'
  }


}
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 header-top">
      <nav class=" flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 toonavc">

        <NavigationMenu defaultValue="t2">
          <NavigationMenuList defaultValue="t2" style="margin-bottom:0">
            <NavigationMenuItem value="t1" >
              <NavigationMenuLink  :class="navigationMenuTriggerStyle()">
                <Package2 class="h-6 w-6" />
                <span class="sr-only">Acme Inc</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem value="t2" @click="tk='server'">
              <NavigationMenuLink as-child :class="navigationMenuTriggerStyle() +  (tk=='server'?' tksszz ':'')">
                <RouterLink to="/userHome/service">
                  <span  class="text-muted-foreground transition-colors hover:text-foreground">服务器</span>
                </RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem   value="t3" @click="tk='dns'">
              <NavigationMenuLink as-child :class="navigationMenuTriggerStyle() +  (tk=='dns'?' tksszz ':'')">
                <RouterLink to="/userHome/dns">
                  <span  class="text-muted-foreground transition-colors hover:text-foreground">域/DNS</span>
                </RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

        </NavigationMenu>
      </nav>

      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>我的账号</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>充值</DropdownMenuItem>
            <DropdownMenuItem>使用情况</DropdownMenuItem>
            <DropdownMenuItem>账户信息</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>退出登录</DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu >
          <Button variant="outline" @click="changeBg" style="border: none">
            <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span class="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenu>
      </div>
    </header>
    <div class="p-2 space-y-2">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
.tksszz{
  background: #007bff;
}
.tksszz span{
  color: #fff!important;
}
 .toonavc{
  word-break:keep-all;
}
 .header-top{
   z-index: 999999;
 }
</style>