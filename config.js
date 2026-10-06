// ゼミ就活講座LPの設定
// 管理表（Googleスプレッドシート）の「公開情報」シートに出ているURLを貼り付けて、アップロード.bat を実行してください。
window.ZEMI_CONFIG = {
  // 管理表の読み込み用URL（「公開情報」シートの「LP読み込み用URL」）
  sheetCsvUrl: "https://docs.google.com/spreadsheets/d/1pUO_5uvRoD9SroXGb-LD26jA3OhmgHWf3RNpft7kNY4/gviz/tq?tqx=out:csv&headers=1&sheet=%E3%82%BC%E3%83%9F%E4%B8%80%E8%A6%A7",
  // アンケート（Googleフォーム）のURL。ゼミごとのURLが管理表にあればそちらが優先されます
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfzaZvtdyDQPsxUz8RfIMAWj7AnO0qinzB7ZPG6ZIXpIB6uzw/viewform"
  // 開催日より前でもアンケートを開いておくゼミ（ゼミのID）。開いておく必要がなくなったら消してください
  ,surveyOpenNow: []
};
