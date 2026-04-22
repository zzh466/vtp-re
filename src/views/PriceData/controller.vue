<template>
    <div class="controller">
        <span @mousedown="go('Rewind')" @mouseup="end" class="controller-btn">
          {{ step > 8 ? '⏪' : '◀' }}
        </span>
        <span v-if="!pause" @click="start('Stop')" class="controller-btn">⏸</span>
        <span v-else @click="start('Start')" class="controller-btn">▶</span>
        <span @mousedown="go('Forward')" @mouseup="end" class="controller-btn">
          {{ step > 8 ? '⏩' : '▶' }}
        </span>
        <span @click="next" class="controller-btn">⏭</span>
    </div>
</template>
<script>
import { ipcRenderer } from 'electron'

export default {
    data() {
        return {
            pause: false,
            step: 4
        }
    },
    methods: {
        send(msg) {
            ipcRenderer.send('send-fake-trade-msg', `NotifyQuotDataHist${msg}`)
        },
        start(flag) {
            this.send(flag + '@')
            this.pause = !this.pause
        },
        go(direction) {
            this.end()
            this.send(`${direction}@${this.step}`)
            this.timer = setInterval(() => {
                if (this.step < 40) {
                    this.step = this.step + 4
                }
                this.send(`${direction}@${this.step}`)
            }, 1000)
        },
        end() {
            clearInterval(this.timer)
            this.step = 4
        },
        next() {
            const { id } = this.$route.query
            ipcRenderer.send('jump-next', id)
        }
    }
}
</script>
<style>
.controller{
    text-align: center;
    background-color: white;
    width: 80px;
}
.controller-btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    cursor: pointer;
    user-select: none;
}
</style>
