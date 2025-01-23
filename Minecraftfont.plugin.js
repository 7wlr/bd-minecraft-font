/**
 * @name MinecraftFont
 * @version 1.1.0
 * @description Apply the custom Minecraft font to Discord.
 * @author 7wlr
 */
module.exports = class CustomMinecraftFont {
  constructor() {
      this.fontUrl = "data:font/truetype;charset=utf-8;base64,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"
      this.fontFamily = "'Minecraft', sans-serif";
  }

  start() {
    this.injectCSS();
  }

  stop() {
    const styleTags = document.querySelectorAll("style");
    styleTags.forEach(tag => {
      if (tag.innerHTML.includes("Minecraftia")) {
        tag.remove();
      }
    });
  }

  injectCSS() {
    const style = document.createElement("style");
    style.innerHTML = `
      @font-face {
        font-family: 'Minecraft';
        src: url('${this.fontUrl}') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      *, body, html {
        font-family: ${this.fontFamily} !important;
        line-height: 1 !important;
      }

      .message-2qnXI6, .container-3h4BVm, .content-2s6S13, .messageContent-2t3eCI {
          font-family: ${this.fontFamily} !important;
          font-size: 1em !important;
          line-height: 1 !important;
      }

      .name-2wz26F, .username-2o2yqj, .user-8eA58q {
        font-family: ${this.fontFamily} !important;
        font-size: 1em !important;
        line-height: 1 !important;
      }

      .input-2r3v11, .slateTextArea-1M90d_, [role="textbox"] {
          font-family: ${this.fontFamily} !important;
          font-size: 1em !important;
          line-height: 1 !important;
      }

      .header-2Kx1Us, .title-31JmR0, .item-3WvG67, .categoryName-3v774x, .tab-1f3f9W, .button-3AYNKw, .embedFooterText-3qL29V, .channelName-3-_edj, .groupName-2h8-4C, .ellipsis-10U9bJ {
          font-family: ${this.fontFamily} !important;
          font-size: 1em !important;
          line-height: 1 !important;
      }
      
      .tooltip-1sM8bT, .container-ZMc96t, .item-1_X1lx, .option-2eB1-9, .menu-3Qv5qN {
         font-family: ${this.fontFamily} !important;
        font-size: 1em !important;
        line-height: 1 !important;
      }

    `;
    document.head.appendChild(style);
  }
}