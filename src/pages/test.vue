<template>
  <div>
    <h1>タイトル</h1>
    <h2>サブタイトル</h2>
    <p class="p">
      <i></i
      >私が使用するのはnormalize.cssの他に、上書きしたいすべてのスタイルを定義するareset.local.cssを加えます。このファイルは通常のReset
      CSSとは異なり、タグの巨大なリストを作成するのではなく、特定のHTMLタグのスタイルのみが対象です。
      実際の例をお見せします。
    </p>
    <ul>
      <li>アイウエオ</li>
      <li>アイウエオ</li>
      <li>アイウエオ</li>
      <li>アイウエオ</li>
    </ul>
    <div>
      <input type="text" /><input type="button" value="ボタン" /><button>
        ボタン
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaaa: 'あああ'
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.p {
  color: $color__text;
}
i::after {
  @include icon('circle');
}
</style>
