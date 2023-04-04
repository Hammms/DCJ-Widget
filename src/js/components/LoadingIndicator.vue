<template>
  <div class="dcj-widget-loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.dcj-widget-loading {
  position: relative;
  width: 5rem;
  height: 5rem;
  margin-right: auto;
  margin-left: auto;
}
.dcj-widget-loading div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 1); /* tw: bg-green-500, hex: #10b981 */
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.dcj-widget-loading div:nth-child(1) {
  left: 8px;
  animation: dcj-widget-loading1 0.6s infinite;
}
.dcj-widget-loading div:nth-child(2) {
  left: 8px;
  animation: dcj-widget-loading2 0.6s infinite;
}
.dcj-widget-loading div:nth-child(3) {
  left: 32px;
  animation: dcj-widget-loading2 0.6s infinite;
}
.dcj-widget-loading div:nth-child(4) {
  left: 56px;
  animation: dcj-widget-loading3 0.6s infinite;
}
@keyframes dcj-widget-loading1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes dcj-widget-loading2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
@keyframes dcj-widget-loading3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
