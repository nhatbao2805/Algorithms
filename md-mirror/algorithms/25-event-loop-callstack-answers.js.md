# Ôn Tập Mã Nguồn — `algorithms/25-event-loop-callstack-answers.js`

> File này là bản Markdown để đọc/ôn tập nhanh. Nội dung code giữ nguyên từ file gốc.

---

## Mã Nguồn

```javascript
/**
 * ============================================
 * 📘 EVENT LOOP - ĐÁP ÁN CHI TIẾT
 * ============================================
 *
 * File này chứa **đáp án + giải thích** cho:
 *   `25-event-loop-callstack-exercises.js`
 *
 * Khuyến nghị:
 * - Làm xong bài trong file exercises rồi mới mở file này.
 */

const LINE = "─".repeat(50);

function sep(title) {
  console.log("\n" + LINE);
  console.log(title);
  console.log(LINE);
}

// ============================================
// ĐÁP ÁN BÀI 1
// ============================================
function dapAnBai1() {
  sep("ĐÁP ÁN BÀI 1: sync vs setTimeout vs Promise");

  /**
   * Code gốc:
   *
   * console.log('A');
   *
   * setTimeout(() => {
   *   console.log('B - setTimeout 0');
   * }, 0);
   *
   * Promise.resolve()
   *   .then(() => {
   *     console.log('C - Promise.then');
   *   });
   *
   * console.log('D');
   *
   * Thứ tự:
   * 1. 'A'   (sync)
   * 2. 'D'   (sync)
   * 3. 'C'   (microtask từ Promise.then)
   * 4. 'B - setTimeout 0' (macrotask)
   */

  console.log("Thứ tự đúng: A → D → C → B");
  console.log("Giải thích:");
  console.log("- A, D là code đồng bộ nên chạy trước.");
  console.log(
    "- Promise.then tạo microtask → chạy sau khi toàn bộ sync kết thúc.",
  );
  console.log(
    "- setTimeout là macrotask → chỉ chạy sau khi microtask queue rỗng.",
  );
}

// ============================================
// ĐÁP ÁN BÀI 2
// ============================================
function dapAnBai2() {
  sep("ĐÁP ÁN BÀI 2: nhiều Promise.then liên tiếp");

  /**
   * Code gốc:
   *
   * console.log('1 - sync');
   *
   * Promise.resolve()
   *   .then(() => {
   *     console.log('2 - microtask 1');
   *   })
   *   .then(() => {
   *     console.log('3 - microtask 2');
   *   });
   *
   * Promise.resolve()
   *   .then(() => {
   *     console.log('4 - microtask 3');
   *   });
   *
   * console.log('5 - sync');
   *
   * Phân tích:
   * - '1 - sync' chạy ngay.
   * - Đăng ký 2 chuỗi microtask:
   *   Chuỗi A: then(() => '2') → then(() => '3')
   *   Chuỗi B: then(() => '4')
   * - '5 - sync' chạy ngay.
   *
   * Sau khi code sync xong:
   * - Microtask queue ban đầu: [log 2, log 4]
   *   (log 3 CHỈ được thêm vào queue SAU khi log 2 chạy xong)
   *
   * Thứ tự:
   * 1. '1 - sync'
   * 2. '5 - sync'
   * 3. '2 - microtask 1'
   *    → khi '2' chạy xong mới push '3 - microtask 2' vào queue
   * 4. '4 - microtask 3' (đã có sẵn trong queue từ trước)
   * 5. '3 - microtask 2'
   */

  console.log("Thứ tự đúng: 1 → 5 → 2 → 4 → 3");
}

// ============================================
// ĐÁP ÁN BÀI 3
// ============================================
function dapAnBai3() {
  sep("ĐÁP ÁN BÀI 3: mix microtask + macrotask");

  /**
   * Code gốc (rút gọn):
   *
   * console.log('A');
   *
   * setTimeout(() => {
   *   console.log('B - timeout 1');
   *
   *   Promise.resolve().then(() => {
   *     console.log('C - microtask trong timeout 1');
   *   });
   *
   *   console.log('D - cuối timeout 1');
   * }, 0);
   *
   * setTimeout(() => {
   *   console.log('E - timeout 2');
   * }, 0);
   *
   * Promise.resolve().then(() => {
   *   console.log('F - microtask 1');
   * });
   *
   * console.log('G');
   *
   * Phân tích:
   * - Sync: 'A' → 'G'
   * - Promise.then (F) là microtask.
   * - Hai setTimeout là hai macrotask: timeout1, timeout2.
   *
   * Bước 1 (code sync):
   * - In: A, G
   * - Hàng đợi:
   *   - Microtask: [F]
   *   - Macrotask: [timeout1, timeout2]
   *
   * Bước 2 (xử lý microtask sau khi sync xong):
   * - Chạy F → in: 'F - microtask 1'
   *
   * Bước 3 (lấy macrotask đầu tiên = timeout1):
   * - In: 'B - timeout 1'
   * - push thêm 1 microtask (C)
   * - In: 'D - cuối timeout 1'
   * - Kết thúc timeout1 → call stack rỗng → xử lý microtask queue:
   *   → in: 'C - microtask trong timeout 1'
   *
   * Bước 4 (lấy macrotask tiếp theo = timeout2):
   * - In: 'E - timeout 2'
   *
   * Thứ tự tổng:
   *   A → G → F → B → D → C → E
   */

  console.log("Thứ tự đúng: A → G → F → B → D → C → E");
}

// ============================================
// ĐÁP ÁN BÀI 4
// ============================================
function dapAnBai4() {
  sep("ĐÁP ÁN BÀI 4: queueMicrotask vs Promise vs setTimeout");

  /**
   * Code gốc:
   *
   * console.log('start');
   *
   * queueMicrotask(() => {
   *   console.log('microtask 1 - queueMicrotask');
   * });
   *
   * Promise.resolve().then(() => {
   *   console.log('microtask 2 - Promise.then');
   * });
   *
   * setTimeout(() => {
   *   console.log('macrotask 1 - setTimeout');
   * }, 0);
   *
   * console.log('end');
   *
   * Phân tích:
   * - Sync: 'start', 'end'
   * - Microtask: [microtask 1, microtask 2]
   * - Macrotask: [macrotask 1]
   *
   * Sau code sync:
   * - Xử lý toàn bộ microtask: microtask 1 → microtask 2
   * - Sau đó mới tới macrotask.
   *
   * Thứ tự:
   *   start → end → microtask 1 → microtask 2 → macrotask 1
   */

  console.log(
    "Thứ tự đúng: start → end → microtask 1 - queueMicrotask → microtask 2 - Promise.then → macrotask 1 - setTimeout",
  );
}

// ============================================
// ĐÁP ÁN BÀI 5
// ============================================
function dapAnBai5() {
  sep("ĐÁP ÁN BÀI 5: Promise lồng nhau");

  /**
   * Code gốc:
   *
   * console.log('1');
   *
   * Promise.resolve()
   *   .then(() => {
   *     console.log('2');
   *     Promise.resolve().then(() => {
   *       console.log('3');
   *     });
   *   })
   *   .then(() => {
   *     console.log('4');
   *   });
   *
   * console.log('5');
   *
   * Phân tích:
   * - Sync: '1', '5'
   * - Sau sync, microtask queue ban đầu: [then(() => 2), ...]
   *
   * Bước microtask:
   * 1. Chạy microtask 1:
   *    - In: '2'
   *    - Bên trong tạo thêm một microtask mới (log '3')
   *    - Đồng thời hứa hẹn then tiếp theo (log '4') sẽ được xếp sau khi chuỗi then hiện tại resolve.
   *
   * Tại thời điểm này, queue (tùy implement, nhưng về hiệu ứng):
   *   - '3' sẽ chạy trước '4'
   *
   * Thứ tự tổng:
   *   1 → 5 → 2 → 3 → 4
   */

  console.log("Thứ tự đúng: 1 → 5 → 2 → 3 → 4");
}

// ============================================
// ĐÁP ÁN BÀI 6
// ============================================
function dapAnBai6() {
  sep("ĐÁP ÁN BÀI 6: setTimeout trong Promise");

  /**
   * Code gốc:
   *
   * console.log('A');
   *
   * Promise.resolve().then(() => {
   *   console.log('B - trong Promise.then');
   *
   *   setTimeout(() => {
   *     console.log('C - timeout trong Promise.then');
   *   }, 0);
   * });
   *
   * setTimeout(() => {
   *   console.log('D - timeout ngoài');
   * }, 0);
   *
   * console.log('E');
   *
   * Phân tích:
   * - Sync: 'A', 'E'
   * - Microtask: [log B]
   * - Macrotask ban đầu: [timeout D]
   *
   * Sau khi sync xong:
   * 1. Chạy microtask: in 'B'
   *    - Trong 'B' đăng ký thêm 1 macrotask C → nó vào hàng đợi **sau** D
   *
   * Hàng đợi macrotask lúc này: [D, C]
   *
   * 2. Lấy macrotask D → in 'D - timeout ngoài'
   * 3. Lấy macrotask C → in 'C - timeout trong Promise.then'
   *
   * Thứ tự tổng:
   *   A → E → B → D → C
   */

  console.log("Thứ tự đúng: A → E → B → D → C");
}

// ============================================
// ĐÁP ÁN BÀI 7
// ============================================
function dapAnBai7() {
  sep("ĐÁP ÁN BÀI 7: Microtask starvation (nâng cao)");

  /**
   * Code gốc (rút gọn):
   *
   * let count = 0;
   *
   * function scheduleMicrotask() {
   *   if (count >= 3) return;
   *   queueMicrotask(() => {
   *     count++;
   *     console.log(`microtask ${count}`);
   *     scheduleMicrotask();
   *   });
   * }
   *
   * setTimeout(() => {
   *   console.log('timeout');
   * }, 0);
   *
   * console.log('sync start');
   * scheduleMicrotask();
   * console.log('sync end');
   *
   * Phân tích:
   * - Sync: 'sync start', 'sync end'
   * - Gọi scheduleMicrotask() → đăng ký 1 microtask đầu.
   *
   * Sau sync:
   * - Microtask queue: [microtask 1]
   * - Macrotask queue: [timeout]
   *
   * Bước microtask:
   * 1. microtask 1:
   *    - count = 1, in: 'microtask 1'
   *    - gọi lại scheduleMicrotask() → push microtask 2
   * 2. microtask 2:
   *    - count = 2, in: 'microtask 2'
   *    - gọi lại scheduleMicrotask() → push microtask 3
   * 3. microtask 3:
   *    - count = 3, in: 'microtask 3'
   *    - scheduleMicrotask() dừng vì count >= 3 (không tạo thêm microtask)
   *
   * - Sau khi queue microtask trống → event loop mới chạy macrotask 'timeout'
   *
   * Thứ tự tổng:
   *   'sync start' → 'sync end' → 'microtask 1' → 'microtask 2' → 'microtask 3' → 'timeout'
   *
   * Câu hỏi 2 (vì sao có thể starvation?):
   * - Nếu bên trong mỗi microtask bạn **luôn** tạo thêm 1 microtask mới
   *   mà không có điều kiện dừng (count >= 3) thì:
   *   → Microtask queue KHÔNG BAO GIỜ RỖNG.
   *   → Event loop sẽ tiếp tục xử lý microtask mãi mãi.
   *   → Không bao giờ đến lượt macrotask (timeout).
   * - Điều này gọi là "starvation" của macrotask (bị bỏ đói, không được chạy).
   */

  console.log(
    "Thứ tự đúng: sync start → sync end → microtask 1 → microtask 2 → microtask 3 → timeout",
  );
  console.log(
    "Giải thích starvation: nếu microtask luôn tự tạo microtask mới không dừng, queue microtask không bao giờ rỗng nên timeout không được chạy.",
  );
}

// ============================================
// ĐÁP ÁN BÀI 8
// ============================================
function dapAnBai8() {
  sep("ĐÁP ÁN BÀI 8: async/await + Promise + setTimeout");

  /**
   * Code gốc:
   *
   * async function bai8() {
   *   console.log('1 - start');
   *
   *   setTimeout(() => {
   *     console.log('2 - timeout 0');
   *   }, 0);
   *
   *   const p = Promise.resolve().then(() => {
   *     console.log('3 - promise.then');
   *   });
   *
   *   await p;
   *
   *   console.log('4 - sau await');
   *
   *   setTimeout(() => {
   *     console.log('5 - timeout 1');
   *   }, 0);
   *
   *   console.log('6 - end');
   * }
   *
   * Phân tích:
   * - '1 - start' là sync.
   * - Đăng ký:
   *   + 1 macrotask (timeout 0 → log 2).
   *   + 1 microtask từ p.then (log 3).
   * - Gặp `await p` → phần còn lại của hàm (log 4, đăng ký timeout 1, log 6)
   *   sẽ được đặt vào microtask (giống như .then() trên Promise p).
   *
   * Sau khi code sync trong async function kết thúc:
   * - Microtask queue: [log 3, phần còn lại sau await (log 4, timeout 1, log 6)]
   * - Macrotask queue: [timeout 0]
   *
   * Xử lý microtask:
   * 1. log 3
   * 2. chạy phần còn lại sau await:
   *    - log 4
   *    - đăng ký timeout 1 (macrotask)
   *    - log 6
   *
   * Lúc này:
   * - Macrotask queue: [timeout 0 (log 2), timeout 1 (log 5)]
   *
   * Xử lý macrotask:
   * 3. timeout 0 → log 2
   * 4. timeout 1 → log 5
   *
   * Thứ tự tổng:
   *   1 → 3 → 4 → 6 → 2 → 5
   */

  console.log("Thứ tự đúng: 1 → 3 → 4 → 6 → 2 → 5");
}

// ============================================
// ĐÁP ÁN BÀI 9
// ============================================
function dapAnBai9() {
  sep("ĐÁP ÁN BÀI 9: then chain phức tạp + nested Promise");

  /**
   * Code gốc:
   *
   * console.log('A');
   *
   * Promise.resolve()
   *   .then(() => {
   *     console.log('B');
   *     return Promise.resolve().then(() => {
   *       console.log('C');
   *     });
   *   })
   *   .then(() => {
   *     console.log('D');
   *   });
   *
   * Promise.resolve()
   *   .then(() => {
   *     console.log('E');
   *   })
   *   .then(() => {
   *     console.log('F');
   *   });
   *
   * console.log('G');
   *
   * Phân tích:
   * - Sync: 'A', 'G'
   * - Chuỗi 1: then → log B, bên trong lại tạo 1 then → log C, rồi sau đó mới đến then → log D.
   * - Chuỗi 2: then → log E, sau đó then → log F.
   *
   * Sau sync:
   * - Microtask queue ban đầu (theo thứ tự tạo): [B-chain, E-chain]
   *
   * 1. Chạy microtask B-chain:
   *    - log 'B'
   *    - return Promise.resolve().then(() => log 'C')
   *      → đăng ký thêm 1 microtask log 'C'
   *    - then tiếp theo (log D) sẽ chạy sau khi Promise bên trong resolve,
   *      thực tế là sẽ được xếp microtask sau khi 'C' hoàn thành.
   *
   * 2. Microtask tiếp theo trong queue: E-chain:
   *    - log 'E'
   *    - đăng ký microtask mới log 'F'
   *
   * Lúc này, thứ tự còn lại trong queue (về hiệu ứng phổ biến):
   *   - 'C', sau đó 'D', và song song đâu đó 'F'.
   *
   * Kết quả trong hầu hết JS engine hiện tại:
   *   A → G → B → E → C → F → D
   *
   * (Mấu chốt: C chạy sau B, F chạy sau E, D chờ toàn bộ chuỗi Promise bên trên resolve.)
   */

  console.log("Thứ tự tham khảo: A → G → B → E → C → F → D");
}

// ============================================
// ĐÁP ÁN BÀI 10
// ============================================
function dapAnBai10() {
  sep("ĐÁP ÁN BÀI 10: setTimeout lồng nhau + microtask");

  /**
   * Code gốc:
   *
   * console.log('start');
   *
   * setTimeout(() => {
   *   console.log('T1');
   *
   *   Promise.resolve().then(() => {
   *     console.log('M1 trong T1');
   *   });
   *
   *   setTimeout(() => {
   *     console.log('T2 trong T1');
   *   }, 0);
   * }, 0);
   *
   * setTimeout(() => {
   *   console.log('T3');
   * }, 0);
   *
   * Promise.resolve().then(() => {
   *   console.log('M2 ngoài');
   * });
   *
   * console.log('end');
   *
   * Phân tích:
   * - Sync: 'start', 'end'
   * - Microtask sau sync: [M2 ngoài]
   * - Macrotask sau sync: [T1, T3]
   *
   * Sau sync:
   * 1. Microtask: in 'M2 ngoài'
   *
   * 2. Lấy macrotask đầu tiên: callback T1
   *    - log 'T1'
   *    - Đăng ký microtask: 'M1 trong T1'
   *    - Đăng ký macrotask: 'T2 trong T1'
   *    - Kết thúc T1 → xử lý hết microtask:
   *      → log 'M1 trong T1'
   *
   * 3. Lấy macrotask tiếp theo trong queue:
   *    - Lúc này queue: [T3, T2 trong T1]
   *    - Lấy T3 trước → log 'T3'
   *
   * 4. Lấy macrotask tiếp theo:
   *    - T2 trong T1 → log 'T2 trong T1'
   *
   * Thứ tự tổng:
   *   start → end → M2 ngoài → T1 → M1 trong T1 → T3 → T2 trong T1
   */

  console.log(
    "Thứ tự đúng: start → end → M2 ngoài → T1 → M1 trong T1 → T3 → T2 trong T1",
  );
}

// ============================================
// ĐÁP ÁN BÀI 11
// ============================================
function dapAnBai11() {
  sep("ĐÁP ÁN BÀI 11: async/await lồng nhau + nhiều Promise");

  /**
   * Code gốc:
   *
   * async function bai11() {
   *   console.log('A');
   *
   *   async function inner() {
   *     console.log('B - inner start');
   *     await Promise.resolve().then(() => {
   *       console.log('C - inner then');
   *     });
   *     console.log('D - inner end');
   *   }
   *
   *   const p = inner();
   *
   *   Promise.resolve().then(() => {
   *     console.log('E - outer microtask');
   *   });
   *
   *   await p;
   *
   *   console.log('F - after await p');
   * }
   *
   * Phân tích:
   * - Sync trong bai11: 'A', rồi gọi inner():
   *   + 'B - inner start' in ngay (sync trong inner).
   *   + Gặp await Promise... → phần còn lại của inner (log D) là microtask sau khi C chạy.
   * - Sau đó đăng ký microtask: 'E - outer microtask'.
   *
   * Sau khi toàn bộ sync xong:
   * - Microtask hàng chờ (thứ tự tạo):
   *   1) inner-then (log C)
   *   2) outer microtask (log E)
   *   3) phần còn lại của inner (log D)
   *   4) phần sau await p (log F)
   *
   * Thực thi:
   * 1. A
   * 2. B - inner start
   * (kết thúc sync)
   * 3. C - inner then
   * 4. E - outer microtask
   * 5. D - inner end (tiếp inner sau await)
   * 6. F - after await p
   *
   * Thứ tự tổng:
   *   A → B → C → E → D → F
   */

  console.log("Thứ tự tham khảo: A → B → C → E → D → F");
}

// ============================================
// ĐÁP ÁN BÀI 12
// ============================================
function dapAnBai12() {
  sep("ĐÁP ÁN BÀI 12: Promise.resolve vs Promise.reject + catch");

  /**
   * Code gốc:
   *
   * console.log('1');
   *
   * Promise.resolve()
   *   .then(() => {
   *     console.log('2 - then 1');
   *     return Promise.reject('error');
   *   })
   *   .then(() => {
   *     console.log('3 - then 2 (không chạy)');
   *   })
   *   .catch(() => {
   *     console.log('4 - catch');
   *   })
   *   .then(() => {
   *     console.log('5 - then sau catch');
   *   });
   *
   * console.log('6');
   *
   * Phân tích:
   * - Sync: '1', '6'
   * - Microtask chain:
   *   1) then 1 → log '2 - then 1', rồi reject
   *   2) do reject nên bỏ qua then 2, nhảy vào catch → log '4 - catch'
   *   3) sau catch, then cuối cùng vẫn chạy → log '5 - then sau catch'
   *
   * Thứ tự:
   *   1 → 6 → 2 → 4 → 5
   */

  console.log(
    "Thứ tự đúng: 1 → 6 → 2 - then 1 → 4 - catch → 5 - then sau catch",
  );
}

// ============================================
// ĐÁP ÁN BÀI 13
// ============================================
function dapAnBai13() {
  sep("ĐÁP ÁN BÀI 13: Promise.all + setTimeout");

  /**
   * Code gốc:
   *
   * console.log('start');
   *
   * const p1 = new Promise(resolve => {
   *   setTimeout(() => {
   *     console.log('T1');
   *     resolve('p1 done');
   *   }, 0);
   * });
   *
   * const p2 = Promise.resolve().then(() => {
   *   console.log('M1');
   *   return 'p2 done';
   * });
   *
   * Promise.all([p1, p2]).then(() => {
   *   console.log('ALL done');
   * });
   *
   * console.log('end');
   *
   * Phân tích:
   * - Sync: 'start', 'end'
   * - Microtask: p2.then → log 'M1'
   * - Macrotask: timeout T1 → log 'T1', sau đó resolve p1.
   * - Promise.all chỉ resolve sau khi **cả p1 và p2** xong:
   *   + p2 xong rất sớm (sau M1).
   *   + p1 xong sau khi T1 chạy.
   *
   * Thứ tự:
   *   start → end → M1 → T1 → ALL done
   */

  console.log("Thứ tự đúng: start → end → M1 → T1 → ALL done");
}

// ============================================
// ĐÁP ÁN BÀI 14
// ============================================
function dapAnBai14() {
  sep("ĐÁP ÁN BÀI 14: Vòng lặp sync nặng + bất đồng bộ");

  /**
   * Code gốc:
   *
   * console.log('A');
   *
   * setTimeout(() => {
   *   console.log('B - timeout');
   * }, 0);
   *
   * Promise.resolve().then(() => {
   *   console.log('C - microtask');
   * });
   *
   * for (let i = 0; i < 3_000_000; i++) {}
   *
   * console.log('D');
   *
   * Phân tích:
   * - Sync: 'A', sau đó vòng lặp nặng (block), rồi 'D'.
   * - Microtask C **chỉ chạy sau khi toàn bộ sync kết thúc** (tức sau khi log D).
   * - Timeout B là macrotask, chỉ chạy sau khi microtask queue trống.
   *
   * Thứ tự:
   *   A → D → C → B
   */

  console.log("Thứ tự đúng: A → D → C → B");
}

// ============================================
// ĐÁP ÁN BÀI 15
// ============================================
function dapAnBai15() {
  sep("ĐÁP ÁN BÀI 15: Kết hợp tổng hợp");

  /**
   * Code gốc (rút gọn):
   *
   * console.log('1');
   *
   * setTimeout(() => {
   *   console.log('2 - timeout 1');
   *   Promise.resolve().then(() => {
   *     console.log('3 - microtask trong timeout 1');
   *   });
   * }, 0);
   *
   * Promise.resolve()
   *   .then(() => {
   *     console.log('4 - microtask 1');
   *   })
   *   .then(() => {
   *     console.log('5 - microtask 2');
   *   });
   *
   * await Promise.resolve().then(() => {
   *   console.log('6 - await microtask');
   * });
   *
   * console.log('7 - sau await');
   *
   * setTimeout(() => {
   *   console.log('8 - timeout 2');
   * }, 0);
   *
   * console.log('9');
   *
   * Phân tích:
   * - Sync: '1', sau đó không có log trong setTimeout đăng ký, rồi kết thúc sync trong async:
   *   + Sau await, phần còn lại (log 7, đăng ký timeout 2, log 9) là microtask.
   *
   * Hàng đợi microtask sau sync:
   *   1) '4 - microtask 1'
   *   2) '6 - await microtask'
   *   (khi 4 chạy xong sẽ tạo tiếp microtask log '5 - microtask 2')
   *
   * Thứ tự microtask:
   *   - log 4
   *   - thêm microtask 5
   *   - log 6
   *   - chạy phần sau await: log 7, đăng ký timeout 2, log 9
   *   - log 5 (tùy engine, nhưng có thể được xếp sau các microtask đã tồn tại)
   *
   * Để đơn giản, một thứ tự hợp lý/ổn định trong nhiều engine:
   *   1 → 4 → 6 → 7 → 9 → 5 → 2 → 3 → 8
   *
   * - Sau khi microtask xong mới tới macrotask:
   *   + timeout 1: log 2 → microtask 3 → log 3
   *   + timeout 2: log 8
   */

  console.log(
    "Thứ tự tham khảo (có thể khác chút tùy engine, nhưng ý tưởng chính): 1 → 4 → 6 → 7 → 9 → 5 → 2 → 3 → 8",
  );
}

// ============================================
// CHẠY TẤT CẢ ĐÁP ÁN
// ============================================
console.log("╔══════════════════════════════════════════╗");
console.log("║ EVENT LOOP - ĐÁP ÁN CÁC BÀI TẬP         ║");
console.log("╚══════════════════════════════════════════╝");

dapAnBai1();
dapAnBai2();
dapAnBai3();
dapAnBai4();
dapAnBai5();
dapAnBai6();
dapAnBai7();
dapAnBai8();
dapAnBai9();
dapAnBai10();
dapAnBai11();
dapAnBai12();
dapAnBai13();
dapAnBai14();
dapAnBai15();

console.log("\n" + "=".repeat(50));
console.log("✅ Đã in xong đáp án & giải thích cho tất cả bài.");
console.log("=".repeat(50));

```

---

## Ghi Chú Ôn Tập

- Mục tiêu file:
- Ý tưởng chính:
- Case dễ nhầm:
- Độ phức tạp (nếu có):
