// Fixed training snapshots; no live case data is fetched.
const LANGS=["zh-Hant","zh-Hans","en"];
const COPY={
  "zh-Hant": {
    "brand": "環境改善追蹤",
    "eyebrow": "追蹤信操作教學",
    "title": "環境改善追蹤｜教戰手冊",
    "lead": "收到信後，先看每張卡片的「待辦」與「本次請完成」，再按「前往更新／前往驗收」填寫結果。信裡已經寫出這次要做的事，照著一步一步完成即可。",
    "open": "開啟環境改善追蹤表",
    "routingLink": "看物管部實際案例",
    "quickLink": "查看結案確認",
    "prereq": "以物管部 2026/10/19 的正式完整版為固定教學案例，搭配信件提醒與操作步驟。",
    "mailLabel": "正式系統教學案例｜擷取日期 2026/10/19",
    "mailTitle": "物管部｜19 項待辦・待驗收 5 項",
    "metrics": [
      [
        "0",
        "逾期未完成",
        "#b51e2b"
      ],
      [
        "4",
        "待補安排",
        "#72695d"
      ],
      [
        "0",
        "期限內改善",
        "#887252"
      ],
      [
        "10",
        "待補佐證",
        "#72695d"
      ],
      [
        "5",
        "待驗收",
        "#5d7062"
      ]
    ],
    "quickLabel": "結案前確認",
    "quickTitle": "改善做完，再把這四項確認好",
    "formula": [
      [
        "補齊資料",
        "缺漏欄位已補齊，矛盾內容已修正。"
      ],
      [
        "更新完成狀態",
        "「目前狀態」選擇「已完成」。"
      ],
      [
        "留下改善佐證",
        "補照片、連結或可供查核的文字說明。"
      ],
      [
        "確認驗收結果",
        "由驗收人確認，將「驗收結果」填為「通過」。"
      ]
    ],
    "quickNote": "這是正常改善案件的結案確認。若已決定不執行，請寫明原因並將狀態改為「取消／不成立」，不要當成「改善完成」。已完成並驗收通過仍可能有資料待修正；依提示補正。「自動偵測分類」由系統更新，不要手動改。",
    "finalLabel": "更新後再確認",
    "finalTitle": "填好了，再看這三件事",
    "finalItems": [
      [
        "案件與資料正確",
        "確認編號、實際狀態與進度相符，資料已儲存；不要只回覆 Email 而未更新表格。"
      ],
      [
        "該補的都有補",
        "信件指出的缺漏與矛盾逐項處理。照片或連結能開啟；沒有照片就寫清楚原因與查核方式。"
      ],
      [
        "下一步有人接手",
        "改善完成後交指定驗收人確認。更新一個欄位不一定結案；仍未完成的事項由部門繼續追蹤。"
      ]
    ],
    "schedule": "自動寄送啟用時，寄送規則（柬埔寨時間）：週一至週三、週五至週六 09:00，部門有資料待修正、逾期或待補安排時，寄該部門完整未結報告（含待補佐證、待驗收）；週四 10:00 寄完整部門彙總，無待辦不寄空白信；週日休息。更新後不必回覆自動信，以共用追蹤表為準。",
    "footer": "MIC 環境改善追蹤信教戰手冊 · 最新狀態以共用追蹤表為準",
    "back": "回到頂端",
    "sections": [
      {
        "id": "conflict",
        "tone": "conflict",
        "color": "#b51e2b",
        "soft": "#fff0f2",
        "num": "!",
        "title": "資料待修正",
        "audience": "部門協作",
        "lead": "紅色提醒會列出資料哪裡矛盾、哪裡沒填。照清單逐項改，不用自己猜問題在哪裡。",
        "actions": [
          [
            "決定不執行",
            "在備註寫明不接受原因，將目前狀態改為「取消／不成立」。"
          ],
          [
            "決定執行替代方案",
            "負責單位回應改為「接受」、目前狀態改為「處理中」，填寫有效的預計完成日期與安排。"
          ]
        ],
        "fields": [
          [
            "負責單位回應",
            "填目前真正的處理決定，不保留已失效的回應。"
          ],
          [
            "目前狀態",
            "必須與回應一致；不能已回應不接受卻仍標待回應。"
          ],
          [
            "預計可完成日期、備註／退回原因",
            "要執行就補期限；不執行則說明原因。"
          ],
          [
            "發現問題時間等必填欄位",
            "依信件列出的缺漏補齊，填寫實際資訊；不要為了消除提醒而填入猜測內容。"
          ]
        ],
        "clear": "缺漏與矛盾全部修正後，下一次重新判定就不再列入「資料待修正」；尚未完成的改善或驗收仍會繼續提醒。",
        "avoid": "不要只在備註解釋而留下矛盾欄位。「異常中心」處理漏寄、重寄、結果不明等寄送問題；案件資料待修正應回追蹤表修正。",
        "steps": [
          [
            "看「資料矛盾」：哪裡對不上？",
            "No.46 已回應「不接受」，卻還選「待回應」。先確認到底要不要執行。"
          ],
          [
            "看「資料不完整」：還漏了什麼？",
            "這筆也缺發現問題時間。找到實際日期再填，不能只改矛盾、漏掉缺項。"
          ],
          [
            "點「前往修正」：把這筆改好",
            "進入對應案件，依實際決定修正狀態、補資料。這張提醒只有問題清單與修正按鈕，請逐項處理。"
          ]
        ],
        "source": "物管部 No.46｜2026/10/19 正式版資料待修正提醒，保留為固定教學案例。",
        "navHint": "補缺漏、改矛盾"
      },
      {
        "id": "overdue",
        "tone": "overdue",
        "color": "#b51e2b",
        "soft": "#fff0f2",
        "num": "01",
        "title": "逾期未完成",
        "audience": "部門協作",
        "lead": "日期已過，先確認工作實際做到哪裡，再把結果填回表裡。",
        "actions": [
          [
            "還在進行",
            "更新實際進度，在備註保留原期限、逾期原因與後續安排；確有調整時，與相關人確認後再填新的可完成日期。"
          ],
          [
            "已經完成",
            "把「目前狀態」改為已完成，補上完成結果及佐證／文字說明，交給驗收人確認。"
          ]
        ],
        "fields": [
          [
            "目前處理進度",
            "寫已完成的工作、剩餘工作及阻礙；不要只寫「處理中」。"
          ],
          [
            "預計可完成日期",
            "仍在做就填新的可執行日期；已完成則保留實際紀錄。"
          ],
          [
            "備註／退回原因",
            "說明為何逾期、誰協助、接下來怎麼做。"
          ]
        ],
        "clear": "安排調整後，系統依更新資料重新分類；未結案件仍可能出現在部門完整報告。完成並驗收通過才結案。",
        "avoid": "不要只把日期往後改而不說原因，也不要在工作未完成時填「已完成」。",
        "steps": [
          [
            "看「待辦」：為什麼逾期？",
            "No.49 的預計完成日已過，但表上還沒記錄完成。先確認現場到底做到哪裡。"
          ],
          [
            "讀「本次請完成」：這次要做什麼？",
            "照信上的指示更新進度，並在備註說明逾期原因與後續安排。已做完才改已完成，再補佐證、交驗收。"
          ],
          [
            "點「前往更新」：把結果填回去",
            "按鈕會帶到這筆案件。填實際結果；還不知道現場狀況，就先找相關人確認，不要代填已完成。"
          ]
        ],
        "source": "保全／門禁 No.49｜正式預覽擷取於 2026/10/19；物管部當次無逾期案件，另引用此例。",
        "navHint": "更新原因與安排"
      },
      {
        "id": "setup",
        "tone": "setup",
        "color": "#72695d",
        "soft": "#f3f1ed",
        "num": "02",
        "title": "待補安排",
        "audience": "部門協作",
        "lead": "看信上缺哪一項，就補哪一項；需要確認人員或日期時，先與相關主管、同仁確認。",
        "actions": [
          [
            "缺人或部門",
            "由主管確認「指派負責部門」「負責人」「驗收人」，不要把 PMO 當成執行人。"
          ],
          [
            "缺回應或日期",
            "負責人選擇接受／需釐清／不接受／暫緩；接受時一定要填有效完成日期。"
          ]
        ],
        "fields": [
          [
            "負責單位回應",
            "接受：承諾處理；需釐清：寫清楚問題；不接受：說明理由；暫緩：補原因與再檢視日期。"
          ],
          [
            "預計可完成日期",
            "接受後必填；請填實際能交付的日期。"
          ],
          [
            "負責人／驗收人",
            "填可辨識的具體人員，不填「待確認」或只寫部門。"
          ]
        ],
        "clear": "回應、人員、狀態與日期等缺項補齊後，系統會重新判定。可能轉成期限內改善或其他階段，不代表工作已完成。",
        "avoid": "不要只填日期卻不選負責單位回應；暫緩不是無限期，必須有原因與再檢視日期。",
        "steps": [
          [
            "看「待辦」：這筆還缺什麼？",
            "No.16 缺「有效的預計完成日期」，就是還沒填什麼時候可以完成。"
          ],
          [
            "讀「本次請完成」：照指示補資料",
            "這裡寫「請補齊上述欄位」，就是要補上一行列出的缺項。這筆要先確認可以完成的日期。"
          ],
          [
            "點「前往更新」：進去把日期填好",
            "找到「預計可完成日期」，填確認好的年月日。若還有其他缺項，也一併補齊。"
          ]
        ],
        "source": "物管部 No.16｜正式預覽擷取於 2026/10/19。",
        "navHint": "補回應、人員與期限"
      },
      {
        "id": "active",
        "tone": "active",
        "color": "#887252",
        "soft": "#f6f1e8",
        "num": "03",
        "title": "期限內改善",
        "audience": "部門協作",
        "lead": "還在期限內，就依安排繼續做，有進展再更新。這份教學信是 0 項，所以只有兩個可對照的位置，沒有更新按鈕。",
        "actions": [
          [
            "進度正常",
            "確認目前進度與完成日仍正確；有新進展時更新「目前處理進度」。"
          ],
          [
            "可能延誤",
            "提早說明風險、需要誰協助及新的安排，不要等到逾期才更新。"
          ]
        ],
        "fields": [
          [
            "目前處理進度",
            "寫這週完成什麼、下一步與需協助事項。"
          ],
          [
            "預計可完成日期",
            "若日期不變不用反覆改；確定延誤時再更新並說明原因。"
          ],
          [
            "目前狀態",
            "依實際選處理中；全部完成後才改已完成。"
          ]
        ],
        "clear": "這一區不是錯誤清單。持續按時推進即可；完成後補佐證並送驗收，驗收通過才完全結案。",
        "avoid": "不要為了讓週四數字變成 0 而提前填已完成，也不要用空泛的「持續處理中」。",
        "steps": [
          [
            "看本區件數",
            "這份正式案例顯示 0 項，表示當次沒有列入此類的案件。"
          ],
          [
            "看提醒內容",
            "不需要為了這個空白區補資料；其他區的待辦仍須共同處理。"
          ]
        ],
        "source": "物管部｜正式預覽擷取於 2026/10/19；本區為 0 項，保留實際空白狀態。",
        "navHint": "依期限持續推進"
      },
      {
        "id": "proof",
        "tone": "proof",
        "color": "#72695d",
        "soft": "#f3f1ed",
        "num": "04",
        "title": "待補佐證",
        "audience": "部門協作",
        "lead": "已做完的改善，要留下驗收人能確認的依據。照片、可查看的連結，或具體的文字說明都可以。",
        "actions": [
          [
            "有照片或文件",
            "把可查看的 Drive／共用資料夾連結放入「改善後／驗收照片連結」。"
          ],
          [
            "沒有照片",
            "在「改善後／驗收照片連結」或「備註／退回原因」直接寫完成方式與查核依據；不必背固定格式。"
          ]
        ],
        "fields": [
          [
            "改善後／驗收照片連結",
            "可放照片、文件或資料夾連結，也可直接寫文字說明。"
          ],
          [
            "完成拍照時間",
            "有照片時填實際拍攝／完成日期。"
          ],
          [
            "目前處理進度",
            "寫最終完成結果，讓驗收人知道要檢查什麼。"
          ]
        ],
        "clear": "已完成／待驗收的案件補好佐證，且驗收人已明確指定後，會進入待驗收；資料待修正仍需另外補正。驗收通過、狀態及資料一致後，才不再提醒。",
        "avoid": "不要只寫「NA」「已完成」或填無關文字。系統讀到連結不代表照片一定可開啟，請實際點開確認；浮在儲存格上方的圖片也可能讀不到。",
        "steps": [
          [
            "看「待辦」：還缺什麼佐證？",
            "No.17 缺改善後佐證或文字說明。只寫已完成，驗收人還不知道要依什麼確認。"
          ],
          [
            "讀「本次請完成」：補照片或說明",
            "有照片就補可查看的照片／連結；不適合拍照，就寫完成了什麼、為何不附照片、可以怎麼確認。"
          ],
          [
            "點「前往更新」：把佐證放進去",
            "在改善後佐證欄或備註填寫，確認驗收人能查看。補好後還要驗收，不代表已經結案。"
          ]
        ],
        "source": "物管部 No.17｜2026/10/19 正式版待補佐證提醒。",
        "navHint": "補照片或文字說明"
      },
      {
        "id": "review",
        "tone": "review",
        "color": "#5d7062",
        "soft": "#eff3ef",
        "num": "05",
        "title": "待驗收",
        "audience": "部門協作",
        "lead": "改善完成後，由指定驗收人確認是否達到要求，再把驗收結果填好。",
        "actions": [
          [
            "確認通過",
            "指定驗收人確認改善結果符合要求後，填「通過」；再核對目前狀態為已完成，缺漏與矛盾均已處理。"
          ],
          [
            "需要補強",
            "把「驗收結果」填為退回，並在備註清楚寫要補什麼；案件會回到待補佐證。"
          ]
        ],
        "fields": [
          [
            "驗收結果",
            "依實際驗收填通過或退回。通過仍須核對完成狀態與資料完整性；退回需說明補強內容。"
          ],
          [
            "備註／退回原因",
            "退回時必須具體寫出缺口與完成標準。"
          ],
          [
            "驗收人",
            "同仁可協助查核與補充資訊，由指定驗收人確認並填寫結論；跨部門驗收須先協調一致。"
          ]
        ],
        "clear": "目前狀態為已完成、驗收結果為通過，且沒有資料缺漏或矛盾時，下一次重新判定就不再列出。已寄出的舊信不會自動改寫。",
        "avoid": "不要把驗收欄留空，也不要由負責人自行代替驗收人填通過。",
        "steps": [
          [
            "看「待辦」：現在等誰確認？",
            "No.22 由電力部改善，物管部共同驗收。這筆已有文字說明，現在等驗收人確認結果。"
          ],
          [
            "讀「本次請完成」：確認結果再填驗收",
            "依照片、完成說明或現場查核確認是否達成要求；不能只因為有人填已完成就直接通過。"
          ],
          [
            "點「前往驗收」：填通過或退回",
            "由指定驗收人填寫。需要補強就退回，並寫明哪裡要改；負責人不要自行代替驗收人填通過。"
          ]
        ],
        "source": "物管部共同驗收 No.22｜正式預覽擷取於 2026/10/19。",
        "navHint": "確認結果並回填"
      }
    ],
    "snapshotNote": "教材保留當時的畫面與數字，不會隨案件更新。點選「前往更新／前往修正／前往驗收」會開啟共用表的最新資料；案件可能已修正或完成，與範例不同是正常的。",
    "liveConsole": "查看即時狀況 → 正式控制中心 → 部門信件",
    "caseLabel": "從實際信件開始",
    "caseTitle": "以物管部案例，說明如何處理追蹤提醒",
    "caseText": "物管部涉及的環境與維護事項較多，因此用物管部的信件帶大家操作；案件多，不代表沒有認真處理。點選上方 ①②③，會標出下方信件的對應位置，其他部門也可以照著做。",
    "teamNote": "部門一起幫忙：知道現場情況的同仁可以補資訊、提供照片、協調安排。負責人確認改善進度，指定驗收人確認結果，主管持續掌握進度與協調資源；有自動提醒，仍然需要大家追蹤。",
    "zoom": "放大信件畫面",
    "close": "關閉",
    "details": "需要時展開：欄位怎麼填、填完會怎樣",
    "after": "更新後如何確認",
    "caution": "處理提醒",
    "backSteps": "回到步驟",
    "original": "信件原文｜點上方步驟，對照 ①②③",
    "zoomNote": "可左右捲動查看原文；關閉後回到教學。",
    "qualityCount": 4,
    "qualityLabel": "資料待修正",
    "liveCaseNote": "點選按鈕會開啟最新資料，案件可能已修正或完成；本範例保留教學當時的狀態。",
    "trainingTitle": "固定教學案例｜2026/10/19",
    "trainingWarning": "請勿為了練習改回舊狀態。"
  },
  "zh-Hans": {
    "brand": "环境改善追踪",
    "eyebrow": "追踪信操作教学",
    "title": "环境改善追踪｜教战手册",
    "lead": "收到信后，先看每张卡片的“待办”和“本次请完成”，再点“前往更新／前往验收”填写结果。信里已经写出这次要做的事，照着一步一步完成即可。",
    "open": "打开环境改善追踪表",
    "routingLink": "看物管部实际案例",
    "quickLink": "查看结案确认",
    "prereq": "以物管部 2026/10/19 的正式完整版作为固定教学案例，搭配信件提醒与操作步骤。",
    "mailLabel": "正式系统教学案例｜截取日期 2026/10/19",
    "mailTitle": "物管部｜19 项待办・待验收 5 项",
    "metrics": [
      [
        "0",
        "逾期未完成",
        "#b51e2b"
      ],
      [
        "4",
        "待补安排",
        "#72695d"
      ],
      [
        "0",
        "期限内改善",
        "#887252"
      ],
      [
        "10",
        "待补佐证",
        "#72695d"
      ],
      [
        "5",
        "待验收",
        "#5d7062"
      ]
    ],
    "quickLabel": "结案前确认",
    "quickTitle": "改善做完，再把这四项确认好",
    "formula": [
      [
        "补齐资料",
        "缺漏字段已补齐，矛盾内容已修正。"
      ],
      [
        "更新完成状态",
        "“目前状态”选择“已完成”。"
      ],
      [
        "留下改善佐证",
        "补照片、链接或可供核查的文字说明。"
      ],
      [
        "确认验收结果",
        "由验收人确认，将“验收结果”填写为“通过”。"
      ]
    ],
    "quickNote": "正常改善案件完成这些确认后结案。决定不执行时，说明原因并改为“取消／不成立”，不能算改善完成。已完成且验收通过仍可能有资料待修正；请补正。“自动侦测分类”由系统更新，不要手动修改。",
    "finalLabel": "更新后再确认",
    "finalTitle": "填好了，再看这三件事",
    "finalItems": [
      [
        "案件与资料正确",
        "核对编号、实际状态与进度，确认已保存；不能只回复邮件而不更新表格。"
      ],
      [
        "缺项都处理了",
        "逐项修正缺漏与矛盾，确认照片能打开；没有照片就写原因与核查方式。"
      ],
      [
        "下一步有人接手",
        "交指定验收人确认。更新一个字段不一定结案，部门继续跟踪未完成事项。"
      ]
    ],
    "schedule": "自動寄送启用时，发送规则（柬埔寨时间）：周一至周三、周五至周六 09:00，部门有资料待修正、逾期或待补安排时，发送该部门完整未结报告（含待补佐证、待验收）；周四 10:00 发送完整部门汇总，无待办不发空白信；周日休息。更新后不必回复自动信，以共享追踪表为准。",
    "footer": "MIC 环境改善追踪信教战手册 · 最新状态以共享追踪表为准",
    "back": "返回顶部",
    "sections": [
      {
        "id": "conflict",
        "tone": "conflict",
        "color": "#b51e2b",
        "soft": "#fff0f2",
        "num": "!",
        "title": "资料待修正",
        "audience": "部门协作",
        "lead": "在同一区处理资料缺漏与字段矛盾。先看信件指出哪里有问题，再由部门共同补正。",
        "actions": [
          [
            "决定不执行",
            "在备注写明不接受原因，将目前状态改为“取消／不成立”。"
          ],
          [
            "决定执行替代方案",
            "回应改为“接受”、状态改为“处理中”，填写有效的预计完成日期与安排。"
          ]
        ],
        "fields": [
          [
            "负责单位回应",
            "填写目前真实的处理决定。"
          ],
          [
            "目前状态",
            "须与回应一致，不能已回应不接受却仍标待回应。"
          ],
          [
            "预计完成／再检视日期、备注／退回原因",
            "要执行就补期限；不执行则说明原因。"
          ],
          [
            "发现问题时间等必填字段",
            "按信件列出的缺漏补齐实际信息，不要为了消除提醒而填写猜测内容。"
          ]
        ],
        "clear": "缺漏与矛盾全部修正后，下次重新判定就不再列入“资料待修正”；尚未完成的改善或验收仍会继续提醒。",
        "avoid": "不要只在备注解释却保留矛盾字段。“异常中心”处理漏寄、重寄及结果不明等发送问题；案件资料待修正须回追踪表修正。",
        "steps": [
          [
            "看“资料矛盾”：哪里对不上？",
            "No.46 已回复不接受，状态却仍待回复；先确认是否执行。"
          ],
          [
            "看“资料不完整”：还漏什么？",
            "本案也缺发现问题时间，核实日期后填写。两种问题都需处理。"
          ],
          [
            "点“前往修正”：把这笔改好",
            "按真实决定改状态、补资料。这种提醒显示问题清单和修正按钮，逐项处理即可。"
          ]
        ],
        "source": "物管部 No.46｜2026/10/19 正式版资料待修正提醒，保留为固定教学案例。",
        "navHint": "补缺漏、改矛盾"
      },
      {
        "id": "overdue",
        "tone": "overdue",
        "color": "#b51e2b",
        "soft": "#fff0f2",
        "num": "01",
        "title": "逾期未完成",
        "audience": "部门协作",
        "lead": "共同确认延误原因、需要的支持及后续安排，再更新进度。",
        "actions": [
          [
            "还在进行",
            "填写实际进度，在备注保留原期限、逾期原因与后续安排；确有调整时，与相关人员确认后再填新日期。"
          ],
          [
            "已经完成",
            "把“目前状态”改为已完成，补上完成结果及佐证／文字说明，交给验收人确认。"
          ]
        ],
        "fields": [
          [
            "目前处理进度",
            "写已完成、剩余工作及阻碍；不要只写“处理中”。"
          ],
          [
            "预计完成／再检视日期",
            "仍在做就填新的可执行日期；已完成则保留实际记录。"
          ],
          [
            "备注／退回原因",
            "说明为何逾期、谁协助、下一步怎么做。"
          ]
        ],
        "clear": "调整安排后，系统按新资料重新分类；未结案件仍可能出现在部门完整报告。完成并验收通过才结案。",
        "avoid": "不要只把日期往后改而不说明原因，也不要在工作未完成时填“已完成”。",
        "steps": [
          [
            "看“待办”：还缺什么？",
            "No.49 的预计完成日已过，先确认实际做到哪里。"
          ],
          [
            "读“本次请完成”：照指示处理",
            "按信中指示更新进度，并在备注说明逾期原因与后续安排。已完成才改状态，再补佐证、交验收。"
          ],
          [
            "点“前往更新”：进去填好",
            "进入对应案件填实际结果；不清楚现场情况时先确认，不能代填已完成。"
          ]
        ],
        "source": "保全／门禁 No.49｜2026/10/19 正式预览；物管部当次无逾期，另引用此例。",
        "navHint": "更新原因与安排"
      },
      {
        "id": "setup",
        "tone": "setup",
        "color": "#72695d",
        "soft": "#f3f1ed",
        "num": "02",
        "title": "待补安排",
        "audience": "部门协作",
        "lead": "按卡片缺项共同确认可执行安排，补齐资料。",
        "actions": [
          [
            "缺人或部门",
            "由主管确认“指派负责部门”“负责人”“验收人”，不要把 PMO 当成执行人。"
          ],
          [
            "缺回应或日期",
            "负责人选择接受／需厘清／不接受／暂缓；接受时一定要填有效完成日期。"
          ]
        ],
        "fields": [
          [
            "负责单位回应",
            "接受：承诺处理；需厘清：写清问题；不接受：说明理由；暂缓：补原因与再检视日期。"
          ],
          [
            "预计完成／再检视日期",
            "接受后必填；请填实际能交付的日期。"
          ],
          [
            "负责人／验收人",
            "填可辨识的具体人员，不填“待确认”或只写部门。"
          ]
        ],
        "clear": "缺项补齐后重新判定，可能转为期限内改善或其他阶段，不等于工作已完成。",
        "avoid": "不要只填日期却不选负责单位回应；暂缓必须有原因与再检视日期。",
        "steps": [
          [
            "看“待办”：还缺什么？",
            "No.16 缺有效的预计完成日期，就是还没填什么时候可以完成。"
          ],
          [
            "读“本次请完成”：照指示处理",
            "“补齐上述字段”就是补上一行列出的缺项。这笔先确认可以完成的日期。"
          ],
          [
            "点“前往更新”：进去填好",
            "在“预计可完成日期”填确认好的年月日，其他缺项也一起补齐。"
          ]
        ],
        "source": "物管部 No.16｜2026/10/19 正式预览。",
        "navHint": "补回应、人员与期限"
      },
      {
        "id": "active",
        "tone": "active",
        "color": "#887252",
        "soft": "#f6f1e8",
        "num": "03",
        "title": "期限内改善",
        "audience": "部门协作",
        "lead": "按计划继续做，有进展就更新。本教学信此区为 0 项，只有两个可对照位置，没有更新按钮。",
        "actions": [
          [
            "进度正常",
            "确认目前进度与完成日仍正确；有新进展时更新“目前处理进度”。"
          ],
          [
            "可能延误",
            "提早说明风险、需要谁协助及新的安排，不要等到逾期才更新。"
          ]
        ],
        "fields": [
          [
            "目前处理进度",
            "写本周完成什么、下一步与需协助事项。"
          ],
          [
            "预计完成／再检视日期",
            "日期不变不用反复改；确定延误时再更新并说明原因。"
          ],
          [
            "目前状态",
            "按实际选择处理中；全部完成后才改已完成。"
          ]
        ],
        "clear": "这不是错误清单。持续按时推进即可；完成后补佐证并送验收，验收通过才完全结案。",
        "avoid": "不要为了让周四数字变 0 而提前填已完成，也不要使用空泛的“持续处理中”。",
        "steps": [
          [
            "看本区件数",
            "0 项代表当次没有列入此类的案件。"
          ],
          [
            "看提醒内容",
            "不需为本空白区补资料；其他区待办仍需共同处理。"
          ]
        ],
        "source": "物管部｜2026/10/19 正式预览；此区为 0 项，保留实际空白状态。",
        "navHint": "按期限持续推进"
      },
      {
        "id": "proof",
        "tone": "proof",
        "color": "#72695d",
        "soft": "#f3f1ed",
        "num": "04",
        "title": "待补佐证",
        "audience": "部门协作",
        "lead": "有现场照片或资料的同仁，可协助补充查核依据。",
        "actions": [
          [
            "有照片或文件",
            "把可查看的 Drive／共享文件夹链接放入“改善后／验收照片链接”。"
          ],
          [
            "没有照片",
            "在“改善后／验收照片链接”或“备注／退回原因”直接写完成方式与查核依据；不必背固定格式。"
          ]
        ],
        "fields": [
          [
            "改善后／验收照片链接",
            "可放照片、文件或文件夹链接，也可直接写文字说明。"
          ],
          [
            "完成拍照时间",
            "有照片时填实际拍摄／完成日期。"
          ],
          [
            "目前处理进度",
            "写最终完成结果，让验收人知道要检查什么。"
          ]
        ],
        "clear": "已完成／待验收的案件补好佐证并指定验收人后，进入待验收；资料待修正仍要补正。通过验收、状态与资料一致后才停止提醒。",
        "avoid": "不要只写 NA、已完成或无关文字。系统读到链接不代表照片能打开，要实际检查；浮在单元格上方的图片也可能读不到。",
        "steps": [
          [
            "看“待办”：还缺什么？",
            "No.17 缺改善后佐证或文字说明，验收人还不知道依据什么确认。"
          ],
          [
            "读“本次请完成”：照指示处理",
            "补可访问照片／链接；不适合拍照时，写完成内容、不附照片原因和核查方式。"
          ],
          [
            "点“前往更新”：进去填好",
            "在改善后佐证栏或备注填写。补好仍需验收，不代表已结案。"
          ]
        ],
        "source": "物管部 No.17｜2026/10/19 正式版待补佐证提醒。",
        "navHint": "补照片或文字说明"
      },
      {
        "id": "review",
        "tone": "review",
        "color": "#5d7062",
        "soft": "#eff3ef",
        "num": "05",
        "title": "待验收",
        "audience": "部门协作",
        "lead": "共同核对结果、协助验收，再由指定验收人填写结论。",
        "actions": [
          [
            "确认通过",
            "指定验收人确认达到要求后填通过，再核对完成状态、缺漏与矛盾。"
          ],
          [
            "需要补强",
            "把“验收结果”填为退回，并在备注写清要补什么；案件会回到待补佐证。"
          ]
        ],
        "fields": [
          [
            "验收结果",
            "按实际验收填通过或退回；通过仍需核对完成状态与资料完整性，退回需写补强内容。"
          ],
          [
            "备注／退回原因",
            "退回时必须具体写出缺口与完成标准。"
          ],
          [
            "验收人",
            "同仁可协助查核及补充信息，由指定验收人确认并填写结论；跨部门验收须先协调一致。"
          ]
        ],
        "clear": "状态已完成、验收通过且没有资料缺漏或矛盾，下一次重新判定才不再列出。旧邮件不会自动改变。",
        "avoid": "不要把验收栏留空，也不要由负责人代替验收人填通过。",
        "steps": [
          [
            "看“待办”：还缺什么？",
            "No.22 由电力部改善、物管部共同验收；已有文字说明，正等待确认。"
          ],
          [
            "读“本次请完成”：照指示处理",
            "按照片、说明或现场核查确认结果，不能只看到“已完成”就通过。"
          ],
          [
            "点“前往验收”：填写结果",
            "指定验收人填通过或退回；退回要写哪里需改，负责人不能代替验收人批准。"
          ]
        ],
        "source": "物管部共同验收 No.22｜2026/10/19 正式预览。",
        "navHint": "确认结果并填写"
      }
    ],
    "snapshotNote": "教材保留当时的画面与数字，不会随案件更新。点击“前往更新／前往修正／前往验收”会打开共享表的最新资料；案件可能已修正或完成，与范例不同是正常的。",
    "liveConsole": "查看实时情况 → 正式控制中心 → 部门信件",
    "caseLabel": "从实际信件开始",
    "caseTitle": "以物管部案例，说明如何处理追踪提醒",
    "caseText": "物管部涉及的环境与维护事项较多，因此用物管部的信件示范；案件多不代表没有认真处理。点击上方①②③，对照下方信件的对应位置，其他部门也可以照着做。",
    "teamNote": "部门一起帮忙：了解现场的同事补信息、照片和安排。负责人确认进度，指定验收人确认结果，主管继续协调资源与跟踪进度；自动提醒不能代替管理。",
    "zoom": "放大信件画面",
    "close": "关闭",
    "details": "需要时展开：怎么填、填完会怎样",
    "after": "更新后如何确认",
    "caution": "处理提醒",
    "backSteps": "返回步骤",
    "original": "正式信件版型｜标注 ①②③ 操作位置",
    "zoomNote": "可左右滚动查看原文；关闭后返回教学。",
    "qualityCount": 4,
    "qualityLabel": "资料待修正",
    "liveCaseNote": "点击按钮会打开最新资料，案件可能已修正或完成；本范例保留教学当时的状态。",
    "trainingTitle": "固定教学案例｜2026/10/19",
    "trainingWarning": "请勿为了练习改回旧状态。"
  },
  "en": {
    "brand": "Environmental Action Tracker",
    "eyebrow": "Email action guide",
    "title": "Environmental Action Tracker | Field Guide",
    "lead": "Read the gap and “Please complete this time” on each email card, then use Update or Review to record the result. The email tells you what to do next.",
    "open": "Open the environmental tracker",
    "routingLink": "See the Property Management example",
    "quickLink": "Check closure requirements",
    "prereq": "Use Property Management’s full report from 19 Oct 2026 as a fixed training example, with email reminders and practical steps.",
    "mailLabel": "Production training example | Captured 19 Oct 2026",
    "mailTitle": "Property Management | 19 actions, 5 awaiting review",
    "metrics": [
      [
        "0",
        "Overdue",
        "#b51e2b"
      ],
      [
        "4",
        "Setup missing",
        "#72695d"
      ],
      [
        "0",
        "Within deadline",
        "#887252"
      ],
      [
        "10",
        "Evidence missing",
        "#72695d"
      ],
      [
        "5",
        "Awaiting review",
        "#5d7062"
      ]
    ],
    "quickLabel": "Before closing a case",
    "quickTitle": "Finish the work, then confirm these four points",
    "formula": [
      [
        "Complete the data",
        "Fill missing fields and resolve conflicting entries."
      ],
      [
        "Update the status",
        "Set Current status to Completed."
      ],
      [
        "Provide evidence",
        "Add photos, links or a written explanation that can be checked."
      ],
      [
        "Confirm acceptance",
        "The reviewer checks the outcome and records Passed."
      ]
    ],
    "quickNote": "These checks apply to completed improvements. For a decision not to proceed, record the reason and use Cancelled / Not Applicable; do not call it a completed improvement. Completed and passed cases can still have data corrections. Update the source fields, not the protected automatic classification.",
    "finalLabel": "After updating",
    "finalTitle": "Check these three things",
    "finalItems": [
      [
        "Correct case and facts",
        "Check the case number, actual status and progress, and confirm saving. Replying to the email alone does not update the tracker."
      ],
      [
        "All gaps addressed",
        "Correct every listed conflict and missing field. Open evidence links; without photos, explain why and how to verify the result."
      ],
      [
        "A clear next step",
        "Ask the designated reviewer to verify completed work. One updated field does not close a case; keep tracking unfinished work."
      ]
    ],
    "schedule": "When automatic sending is enabled. Cambodia time: Mon–Wed and Fri–Sat at 09:00, a data correction, overdue item or setup gap triggers the department’s complete open-case report, including evidence gaps and reviews. Thursday at 10:00 sends full departmental digests; empty digests are not sent. Sunday is off. Update the shared tracker rather than replying to automated emails.",
    "footer": "MIC Environmental Action Email Field Guide · The shared tracker is the source of truth",
    "back": "Back to top",
    "sections": [
      {
        "id": "conflict",
        "tone": "conflict",
        "color": "#b51e2b",
        "soft": "#fff0f2",
        "num": "!",
        "title": "Data corrections",
        "audience": "Department collaboration",
        "lead": "Missing information and conflicting entries now appear together. Read the issue stated in the email and work as a team to correct it.",
        "actions": [
          [
            "Not proceeding",
            "Explain the rejection in Notes and set Status to Cancelled / Not Applicable."
          ],
          [
            "Proceeding with an alternative",
            "Set the response to Accept and status to In Progress. Enter a valid completion date and plan."
          ]
        ],
        "fields": [
          [
            "Owner Response",
            "Record the actual current decision."
          ],
          [
            "Status",
            "Keep it consistent with the response; a rejection cannot remain Awaiting Response."
          ],
          [
            "Expected Completion / Review Date; Notes / Return Reason",
            "Enter a date if proceeding; explain the reason if not proceeding."
          ],
          [
            "Discovery date and other required fields",
            "Fill the fields listed in the email using actual information. Do not guess just to remove a reminder."
          ]
        ],
        "clear": "Once all missing information and conflicts are corrected, the case leaves Data corrections on the next refresh. Outstanding work or review still needs to be completed.",
        "avoid": "Do not explain only in Notes while leaving contradictory fields. The console’s Exceptions Center handles delivery problems such as missed, duplicate or uncertain sends; case data corrections are corrected in the tracker.",
        "steps": [
          [
            "Read the conflict",
            "No.46 says Not Accepted but still Awaiting Response. Confirm whether it will proceed."
          ],
          [
            "Read the missing fields",
            "The discovery date is also missing. Verify the date before filling it. Address both issues."
          ],
          [
            "Select Correct",
            "Update the relevant case with the actual decision and missing details. This alert has an issue list and a correction button; address every item."
          ]
        ],
        "source": "Property Management No.46 | Production data-correction reminder, 19 Oct 2026; retained as a fixed training case.",
        "navHint": "Fill gaps and resolve conflicts"
      },
      {
        "id": "overdue",
        "tone": "overdue",
        "color": "#b51e2b",
        "soft": "#fff0f2",
        "num": "01",
        "title": "Overdue",
        "audience": "Department collaboration",
        "lead": "Review the delay, support needed and next plan together before updating.",
        "actions": [
          [
            "Still in progress",
            "Record actual progress, the original deadline, delay reason and next steps. Change the planned date only after confirming a revised arrangement."
          ],
          [
            "Already complete",
            "Set Status to Completed, add the final result and evidence or written explanation, then send it for review."
          ]
        ],
        "fields": [
          [
            "Current Progress",
            "State what is done, what remains and what is blocking completion."
          ],
          [
            "Expected Completion / Review Date",
            "Enter a new achievable date when work continues."
          ],
          [
            "Notes / Return Reason",
            "Explain the delay, support needed and next action."
          ]
        ],
        "clear": "Updated plans change the classification, but open items may still appear in a complete departmental report. Complete the work and obtain a passed review to close it.",
        "avoid": "Do not move the date without explaining why, and do not mark incomplete work as Completed.",
        "steps": [
          [
            "Read the gap: what is missing?",
            "No.49 is past its planned date. Confirm the actual progress first."
          ],
          [
            "Read the instruction: what should I do?",
            "Follow the instruction: update progress and explain the delay and next steps in Notes. Only mark completed after the work is done, then provide evidence and seek review."
          ],
          [
            "Select Update: fill in the case",
            "Open the case and record verified facts. If the site status is unknown, confirm it before entering completion."
          ]
        ],
        "source": "Security / Access Control No.49 | Production preview, 19 Oct 2026. Property Management had no overdue items in that snapshot.",
        "navHint": "Update reasons and arrangements"
      },
      {
        "id": "setup",
        "tone": "setup",
        "color": "#72695d",
        "soft": "#f3f1ed",
        "num": "02",
        "title": "Setup missing",
        "audience": "Department collaboration",
        "lead": "Use the listed gaps to agree on an achievable plan and complete the information.",
        "actions": [
          [
            "Owner or department missing",
            "The manager confirms Assigned Department, Owner and Reviewer. PMO is not the action owner."
          ],
          [
            "Response or date missing",
            "The owner selects Accept / Clarification / Reject / Hold. Accept requires a valid date."
          ]
        ],
        "fields": [
          [
            "Owner Response",
            "Accept commits to action; Clarification states the question; Reject explains why; Hold needs a reason and review date."
          ],
          [
            "Expected Completion / Review Date",
            "Required after acceptance; use an achievable delivery date."
          ],
          [
            "Owner / Reviewer",
            "Name specific people, not “TBC” or only a department."
          ]
        ],
        "clear": "Once all gaps are filled, the case is reclassified. It may move to work within the deadline or another stage; this does not mean the work is finished.",
        "avoid": "Do not enter only a date without a response. A hold needs both a reason and a review date.",
        "steps": [
          [
            "Read the gap: what is missing?",
            "No.16 has no valid completion date. It needs a date for when the work can be finished."
          ],
          [
            "Read the instruction: what should I do?",
            "“Complete the fields above” refers to the gaps on the preceding line. Agree on a feasible date for this case."
          ],
          [
            "Select Update: fill in the case",
            "Fill the agreed date in Planned Completion Date and address any other listed gaps."
          ]
        ],
        "source": "Property Management No.16 | Production preview, 19 Oct 2026.",
        "navHint": "Confirm people, response and dates"
      },
      {
        "id": "active",
        "tone": "active",
        "color": "#887252",
        "soft": "#f6f1e8",
        "num": "03",
        "title": "Within deadline",
        "audience": "Department collaboration",
        "lead": "Continue the work and update real progress. This example has zero items, so only two locations can be annotated and there is no update button.",
        "actions": [
          [
            "On track",
            "Confirm progress and date remain correct; update Current Progress when something changed."
          ],
          [
            "At risk",
            "Flag the risk, support needed and revised plan before the due date."
          ]
        ],
        "fields": [
          [
            "Current Progress",
            "State what was completed this week, next step and support needed."
          ],
          [
            "Expected Completion / Review Date",
            "Keep it if unchanged; revise only when the plan changed and explain why."
          ],
          [
            "Status",
            "Use In Progress while work continues; Completed only when all work is done."
          ]
        ],
        "clear": "This is not an error list. Keep moving on schedule; add evidence when done and obtain a passed review for closure.",
        "avoid": "Do not mark work complete just to make the Thursday count zero. Avoid vague updates such as “still working.”",
        "steps": [
          [
            "Check the count",
            "Zero means no cases were listed in this category at capture."
          ],
          [
            "Read the message",
            "No update is needed for this empty section; other open items still need team support."
          ]
        ],
        "source": "Property Management | Production preview, 19 Oct 2026. The actual empty state is retained.",
        "navHint": "Keep work on schedule"
      },
      {
        "id": "proof",
        "tone": "proof",
        "color": "#72695d",
        "soft": "#f3f1ed",
        "num": "04",
        "title": "Evidence missing",
        "audience": "Department collaboration",
        "lead": "Colleagues with site photos or information can help provide evidence for review.",
        "actions": [
          [
            "Photo or document available",
            "Put an accessible Drive or shared-folder link in After / Review Evidence."
          ],
          [
            "No photo available",
            "Write how completion was verified in After / Review Evidence or Notes. No fixed phrase is required."
          ]
        ],
        "fields": [
          [
            "After / Review Evidence",
            "A photo, document, folder link or plain-text explanation is accepted."
          ],
          [
            "Completion Photo Date",
            "Enter the actual date when a photo exists."
          ],
          [
            "Current Progress",
            "State the final result so the reviewer knows what to verify."
          ]
        ],
        "clear": "For Completed / Awaiting Review cases, evidence and a named reviewer allow review to proceed. Resolve data corrections separately. Passed review, consistent status and complete data are needed to stop reminders.",
        "avoid": "Do not enter only NA, Completed or unrelated text. A detected link is not proof that an image loads; open it. Floating images over cells may not be read.",
        "steps": [
          [
            "Read the gap: what is missing?",
            "No.17 has no after evidence or explanation. The reviewer needs something to verify."
          ],
          [
            "Read the instruction: what should I do?",
            "Add accessible evidence, or explain what was completed, why photos are unsuitable, and how to verify it."
          ],
          [
            "Select Update: fill in the case",
            "Update the evidence field or Notes. Evidence still needs review; adding it does not close the case."
          ]
        ],
        "source": "Property Management No.17 | Production evidence reminder, 19 Oct 2026.",
        "navHint": "Add photos or an explanation"
      },
      {
        "id": "review",
        "tone": "review",
        "color": "#5d7062",
        "soft": "#eff3ef",
        "num": "05",
        "title": "Awaiting review",
        "audience": "Department collaboration",
        "lead": "Help verify results and arrange the review, then have the designated reviewer record the conclusion.",
        "actions": [
          [
            "Pass",
            "The designated reviewer verifies the result and records Passed. Also check Completed status and resolve any missing or conflicting data."
          ],
          [
            "Return for improvement",
            "Set Review Result to Returned and write exactly what must be corrected in Notes."
          ]
        ],
        "fields": [
          [
            "Review Result",
            "Record Passed or Returned based on verification. Passed still requires consistent completion data; Returned needs specific corrections."
          ],
          [
            "Notes / Return Reason",
            "For a return, state the gap and acceptance standard."
          ],
          [
            "Reviewer",
            "Colleagues can help verify evidence and provide information. The designated reviewer confirms and records the conclusion after coordinating joint reviews."
          ]
        ],
        "clear": "Completed, Passed and no missing or conflicting data means it will no longer be listed after reevaluation. Emails already sent do not change.",
        "avoid": "Do not leave the review field blank, and owners should not approve their own work on behalf of the reviewer.",
        "steps": [
          [
            "Read the gap: what is missing?",
            "Power owns No.22 and Property Management helps review it. A written explanation is ready for checking."
          ],
          [
            "Read the instruction: what should I do?",
            "Verify the result using evidence or a site check. A Completed status alone is not proof."
          ],
          [
            "Select Review: record the result",
            "The designated reviewer records Passed or Returned with specific corrections. Owners must not approve on behalf of reviewers."
          ]
        ],
        "source": "Property Management joint review, No.22 | Production preview, 19 Oct 2026.",
        "navHint": "Check and record the result"
      }
    ],
    "snapshotNote": "The lesson keeps the original images and counts. Update, Correct and Review open the latest shared tracker. Cases may already be corrected or completed, so differences are expected.",
    "liveConsole": "View current data → Production console → Department emails",
    "caseLabel": "Start with the actual email",
    "caseTitle": "Learn from Property Management’s reminder emails",
    "caseText": "Property Management handles many environmental and maintenance items, making its email a useful example. A larger case count does not mean less effort. Select steps 1, 2 and 3 to highlight the corresponding parts of the email.",
    "teamNote": "Work together: colleagues can contribute site information, photos and arrangements. Owners track the work; designated reviewers confirm results. Managers still monitor progress and coordinate resources even when reminders are automated.",
    "zoom": "Enlarge email view",
    "close": "Close",
    "details": "Expand when needed: fields and what happens next",
    "after": "Confirm the update",
    "caution": "Keep in mind",
    "backSteps": "Back to steps",
    "original": "Production email layout | Steps 1, 2 and 3 marked",
    "zoomNote": "Scroll horizontally to read the original. Close to return to the lesson.",
    "qualityCount": 4,
    "qualityLabel": "Data corrections",
    "liveCaseNote": "Buttons open current data; this case may already be corrected or completed. The example preserves its training state.",
    "trainingTitle": "Fixed training case | 19 Oct 2026",
    "trainingWarning": "Do not restore an old status for practice."
  }
};
function esc(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function trainingNotice(c,compact=false){
  return '<aside class="training-notice'+(compact?' training-notice-compact':'')+'"><span class="training-notice-icon" aria-hidden="true">!</span><div><strong class="training-notice-title">'+esc(c.trainingTitle)+'</strong><p>'+esc(compact?c.liveCaseNote:c.snapshotNote)+'</p><strong class="training-notice-warning">'+esc(c.trainingWarning)+'</strong></div></aside>';
}
function lessonFigure(s,c){
  const isConflict=s.id==='conflict';
  const image=MAIL_EXAMPLES[s.id];
  return '<figure class="email-figure"><figcaption><span>'+esc(c.original)+'</span><button type="button" data-zoom="'+s.id+'">'+esc(c.zoom)+'</button></figcaption><div class="actual-mail '+(isConflict?'quality-example':'')+'" lang="zh-Hant" data-example="'+s.id+'">'+image+'</div><p class="source-caption">'+esc(s.source)+'</p>'+trainingNotice(c,true)+'</figure>';
}
function addMailMarkers(){
  document.querySelectorAll('.actual-mail').forEach(panel=>{
    const section=panel.dataset.example;
    let targets;
    if(section==='conflict') targets=[panel.querySelector('[data-quality-conflict]'),panel.querySelector('[data-quality-missing]'),panel.querySelector('a')];
    else if(section==='active')targets=[panel.querySelector('h2'),panel.querySelector('p')];
    else targets=[...['待辦：','本次請完成：'].map(label=>[...panel.querySelectorAll('p')].find(p=>p.textContent.startsWith(label))),panel.querySelector('a')];
    targets.forEach((el,i)=>{
      if(!el)throw new Error('Missing production mail target: '+section+' '+i);
      el.id=section+'-mark-'+(i+1);el.tabIndex=-1;
      {
        el.classList.add('mail-highlight');
        const badge=document.createElement('span');badge.className='mail-number';badge.textContent=i+1;badge.setAttribute('aria-hidden','true');el.prepend(badge);
      }
    });
    panel.querySelectorAll('a:not(.image-marker)').forEach(a=>{a.target='_blank';a.rel='noopener';});
  });
}
const READING_COPY={
  "zh-Hant": {
    "subject": "先看信件標題與總數",
    "subjectNote": "本信共 19 項待辦，包含待驗收 5 項。資料待修正也包含在總數內，請勿把各區數字直接相加。",
    "conflict": "先處理資料待修正",
    "conflictCount": "資料待修正｜4 項",
    "conflictNote": "資料缺漏與矛盾合併提醒，同一案件只算 1 項。No.46 同時有欄位矛盾與日期缺漏，兩處都要修正。",
    "conflictLink": "看 No.46 的提醒與修正步驟 →",
    "categories": "依提醒類型，查看處理步驟",
    "categoriesNote": "部門一起補資料、安排改善與完成驗收。資料待修正可能與下方流程階段重疊。"
  },
  "zh-Hans": {
    "subject": "先看信件标题与总数",
    "subjectNote": "本信共 19 项待办，包含待验收 5 项。资料待修正也包含在总数内，不要直接相加各区数字。",
    "conflict": "先处理资料待修正",
    "conflictCount": "资料待修正｜4 项",
    "conflictNote": "资料缺漏与矛盾合并提醒，同一案件只算 1 项。No.46 同时有字段矛盾与日期缺漏，两处都要修正。",
    "conflictLink": "看 No.46 的提醒与修正步骤 →",
    "categories": "按提醒类型，查看处理步骤",
    "categoriesNote": "部门共同补资料、安排改善与完成验收。资料待修正可能与下方流程阶段重叠。"
  },
  "en": {
    "subject": "Read the subject and total",
    "subjectNote": "There are 19 open cases, including 5 awaiting review. Data corrections are also included in the total; do not add the section counts together.",
    "conflict": "Address data corrections first",
    "conflictCount": "Data corrections | 4",
    "conflictNote": "Missing information and conflicts are combined, counting each case once. No.46 has both a conflicting status and a missing discovery date; correct both.",
    "conflictLink": "See No.46 and the correction steps →",
    "categories": "Choose a reminder type for its steps",
    "categoriesNote": "Work as a team on information, arrangements and review. Data corrections may overlap with a workflow stage."
  }
};
const SHORTCUT_COPY={
  'zh-Hant':{title:'你想先看什麼？',items:[['收到提醒，要怎麼處理？','用物管部案例，跟著 ①②③ 操作。'],['照片怎麼上傳、放進表格？','上傳照片、複製連結，再套用公式。'],['怎樣才算完成、可以結案？','確認完成狀態、佐證與驗收結果。'],['還有提醒？先看信上要你做什麼','看「待辦」和「本次請完成」，照指示逐項補好。']]},
  'zh-Hans':{title:'你想先看什么？',items:[['收到提醒，要怎么处理？','用物管部案例，跟着①②③操作。'],['照片怎么上传、放进表格？','上传照片、复制链接，再套用公式。'],['怎样才算完成、可以结案？','确认完成状态、佐证与验收结果。'],['还有提醒？先看信上要你做什么','看“待办”和“本次请完成”，按指示逐项补好。']]},
  en:{title:'What would you like to do?',items:[['How do I handle a reminder?','Follow steps 1, 2 and 3 in a Property Management example.'],['How do I add a photo?','Upload a photo, copy its link and use the formula.'],['When is a case ready to close?','Check completion, evidence and review results.'],['Still getting reminders? Read what the email asks you to do','Read the gap and action, then complete each requested step.']]}
};
function renderShortcuts(lang){
  const c=SHORTCUT_COPY[lang],targets=['mail-routing','photo-guide','quick-rule','reminder-faq'];
  document.getElementById('shortcuts-title').textContent=c.title;
  document.getElementById('shortcuts-grid').innerHTML=c.items.map(([title,body],i)=>'<a class="manual-shortcut" href="#'+targets[i]+'"><span><strong>'+esc(title)+'</strong><small>'+esc(body)+'</small></span><span class="shortcut-arrow" aria-hidden="true">→</span></a>').join('');
}
function render(lang){
  const c=COPY[lang];document.documentElement.lang=lang;document.title=c.title+'｜MIC';
  const ids={brand:'brand',eyebrow:'eyebrow',title:'title',lead:'lead',prereq:'prereq',liveConsole:'live-console',mailLabel:'mail-label',mailTitle:'mail-title',caseLabel:'case-label',caseTitle:'case-title',caseText:'case-text',teamNote:'team-note',quickLabel:'quick-label',quickTitle:'quick-title',quickNote:'quick-note',finalLabel:'final-label',finalTitle:'final-title',schedule:'schedule-note',footer:'footer',back:'back'};
  Object.entries(ids).forEach(([key,id])=>document.getElementById(id).textContent=c[key]);
  document.getElementById('open-sheet').textContent=c.open;renderShortcuts(lang);
  document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
  document.getElementById('snapshot-note').innerHTML=trainingNotice(c);
  const reading=READING_COPY[lang];
  Object.entries({'read-subject':'subject','subject-explanation':'subjectNote','read-conflict':'conflict','conflict-count':'conflictCount','conflict-explanation':'conflictNote','conflict-example-link':'conflictLink','read-categories':'categories','categories-explanation':'categoriesNote'}).forEach(([id,key])=>document.getElementById(id).textContent=reading[key]);
  const metricItems=[[String(c.qualityCount),c.qualityLabel,'#b51e2b'],...c.metrics];
  document.getElementById('metrics').innerHTML=metricItems.map(([n,label,color],i)=>'<a class="metric'+(i===0?' metric-conflict':'')+'" href="#'+['conflict','overdue','setup','active','proof','review'][i]+'" style="--metric:'+color+'"><strong>'+esc(n)+'</strong><span>'+esc(label)+'</span></a>').join('');
  document.getElementById('formula').innerHTML=c.formula.map(([title,body],i)=>'<li class="closure-step"><b class="closure-index">'+(i+1)+'</b><div><h3>'+esc(title)+'</h3><p>'+esc(body)+'</p></div></li>').join('');
  document.getElementById('topic-nav').innerHTML=c.sections.map(s=>'<a href="#'+s.id+'" data-tone="'+s.tone+'"><b>'+s.num+'</b><div><strong>'+esc(s.title)+'</strong><small>'+esc(s.navHint)+'</small></div></a>').join('');
  document.getElementById('sections').innerHTML=c.sections.map(s=>'<section class="guide-section" id="'+s.id+'" style="--tone:'+s.color+';--tone-soft:'+s.soft+'"><article class="step"><div class="section-kicker"><span class="step-num">'+s.num+'</span><span class="audience">'+esc(s.audience)+'</span></div><h2>'+esc(s.title)+'</h2><p class="section-lead">'+esc(s.lead)+'</p><nav class="mail-steps" id="'+s.id+'-steps">'+s.steps.map(([title,body],i)=>'<a href="#'+s.id+'-mark-'+(i+1)+'" data-step-target="'+s.id+'-mark-'+(i+1)+'"><b><span class="step-dot">'+(i+1)+'</span>'+esc(title)+'</b><p>'+esc(body)+'</p></a>').join('')+'</nav>'+lessonFigure(s,c)+'<a class="back-steps" href="#'+s.id+'-steps">'+esc(c.backSteps)+' ↑</a><details class="lesson-details"><summary>'+esc(c.details)+'</summary><div class="action-grid">'+s.actions.map(([t,b])=>'<div class="action-card"><h3>'+esc(t)+'</h3><p>'+esc(b)+'</p></div>').join('')+'</div><table class="field-table"><tbody>'+s.fields.map(([f,b])=>'<tr><th>'+esc(f)+'</th><td>'+esc(b)+'</td></tr>').join('')+'</tbody></table><div class="clear-box"><h3>'+esc(c.after)+'</h3><p>'+esc(s.clear)+'</p></div><div class="avoid-box"><h3>'+esc(c.caution)+'</h3><p>'+esc(s.avoid)+'</p></div></details><a class="screen-back" href="#top">'+esc(c.back)+' ↑</a></article></section>').join('');
  addMailMarkers();
  renderPhotoGuide(lang);
  renderPractice(lang);
  const photoLink=document.createElement("a");photoLink.href="#photo-guide";photoLink.className="secondary";photoLink.textContent=PHOTO_COPY[lang].link;document.getElementById("proof").querySelector(".section-lead").after(photoLink);
  document.getElementById('final-items').innerHTML=c.finalItems.map(([t,b])=>'<div class="check-item"><b>'+esc(t)+'</b><span>'+esc(b)+'</span></div>').join('');
  document.getElementById('mail-zoom-close').textContent=c.close;
  try{localStorage.setItem('environment-guide-language',lang)}catch{}
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.lang)));
document.getElementById('sections').addEventListener('click',e=>{
  const step=e.target.closest('[data-step-target]');
  if(step){
    e.preventDefault();
    document.querySelectorAll('.mail-target-active').forEach(el=>el.classList.remove('mail-target-active'));
    document.querySelectorAll('[data-step-target]').forEach(el=>el.removeAttribute('aria-current'));
    const target=document.getElementById(step.dataset.stepTarget);target.classList.add('mail-target-active');step.setAttribute('aria-current','step');
    target.focus({preventScroll:true});target.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});return;
  }
  const zoom=e.target.closest('[data-zoom]');
  if(!zoom)return;
  const c=COPY[document.documentElement.lang],s=c.sections.find(s=>s.id===zoom.dataset.zoom);
  const clone=document.querySelector('[data-example="'+s.id+'"]').cloneNode(true);
  clone.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
  clone.querySelectorAll('a.image-marker').forEach(a=>{a.removeAttribute('href');a.removeAttribute('tabindex');});
  clone.querySelectorAll('.mail-target-active').forEach(el=>el.classList.remove('mail-target-active'));
  const body=document.getElementById('mail-zoom-content');body.replaceChildren(clone);
  document.getElementById('mail-zoom-title').textContent=s.title+'｜'+c.zoomNote;
  document.getElementById('mail-zoom').showModal();
});
document.getElementById('mail-zoom-close').addEventListener('click',()=>document.getElementById('mail-zoom').close());
let initial='zh-Hant';try{const saved=localStorage.getItem('environment-guide-language');if(LANGS.includes(saved))initial=saved}catch{}
render(initial);

