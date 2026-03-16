/**
 * ============================================
 * 📘 EVENT LOOP - CALL STACK, MICROTASK, MACROTASK
 * ============================================
 *
 * File này = **kiến thức + bài tập** (KHÔNG có đáp án).
 * Đáp án chi tiết nằm ở file:
 *   → `25-event-loop-callstack-answers.js`
 *
 * 💡 MỤC TIÊU:
 * - Hiểu rõ:
 *   1. Call Stack
 *   2. Microtask Queue
 *   3. Macrotask (Callback) Queue
 *   4. Event Loop hoạt động thế nào
 * - Thành thạo suy luận thứ tự console.log với:
 *   - Code đồng bộ
 *   - setTimeout / setInterval (macrotask)
 *   - Promise / queueMicrotask (microtask)
 *   - Các trường hợp lồng nhau (nested)
 *
 * ============================================
 * I. LÝ THUYẾT NGẮN GỌN
 * ============================================
 *
 * 1️⃣ CALL STACK (Ngăn xếp lệnh)
 * - Nơi JavaScript thực thi code **đồng bộ** (synchronous).
 * - Mỗi lần gọi hàm → được push vào stack.
 * - Khi hàm return → bị pop khỏi stack.
 * - Nếu stack chưa rỗng → JavaScript **không xử lý** task bất đồng bộ.
 *
 * 2️⃣ WEB APIs / RUNTIME (Môi trường xung quanh)
 * - setTimeout, setInterval, DOM events, I/O, HTTP... được trình duyệt/Node xử lý.
 * - Khi xong, callback của chúng được chuyển vào **Macrotask Queue** hoặc **Microtask Queue**.
 *
 * 3️⃣ MACROTASK QUEUE (Callback Queue)
 * - Chứa các task "lớn": setTimeout, setInterval, I/O, UI events,...
 * - Mỗi vòng lặp event loop:
 *   - Nếu call stack rỗng → lấy **1 macrotask** ra chạy.
 *
 * 4️⃣ MICROTASK QUEUE
 * - Chứa các microtask: `Promise.then/catch/finally`, `queueMicrotask`, `MutationObserver`.
 * - Ưu tiên hơn macrotask.
 * - Mỗi khi:
 *   - Call stack rỗng **hoặc**
 *   - Vừa thực thi xong 1 macrotask
 *   → Event loop sẽ **xử lý HẾT toàn bộ microtask queue** trước khi sang macrotask tiếp theo.
 *
 * 5️⃣ EVENT LOOP (Vòng lặp sự kiện)
 * - Luật chơi đơn giản:
 *   A. Nếu call stack KHÔNG rỗng → tiếp tục chạy code đồng bộ.
 *   B. Nếu call stack rỗng:
 *      1. Xử lý TẤT CẢ microtask trong microtask queue (theo FIFO).
 *      2. Nếu microtask queue rỗng → lấy 1 macrotask (nếu có) rồi push callback vào stack để chạy.
 *      3. Quay lại bước A.
 *
 * ⚠️ Chú ý:
 * - Microtask có thể liên tục tạo thêm microtask mới → có thể "chặn" macrotask (starvation).
 * - `setTimeout(fn, 0)` KHÔNG chạy "ngay lập tức". Nó vẫn là macrotask, phải chờ:
 *   - Code đồng bộ xong
 *   - Tất cả microtask hiện tại được xử lý xong
 *
 * ============================================
 * II. HƯỚNG DẪN LÀM BÀI TẬP
 * ============================================
 *
 * Mỗi bài dưới đây:
 * - Bạn hãy:
 *   1. Đọc code
 *   2. Tự viết ra giấy/thử đoán THỨ TỰ console.log
 *   3. Ghi lại kết quả của bạn
 *   4. Cuối cùng mới mở file: `25-event-loop-callstack-answers.js` để so sánh.
 *
 * TIP:
 * - Đánh số thứ tự bạn nghĩ nó sẽ in: (1), (2), (3) ngay trong comment.
 */

// Helper nhỏ để phân cách bài
function sep(title) {
  console.log("\n" + "━".repeat(50));
  console.log(title);
  console.log("━".repeat(50));
}

// ============================================
// BÀI 1: CƠ BẢN - sync vs setTimeout vs Promise
// ============================================
function bai1() {
  sep("BÀI 1: sync vs setTimeout vs Promise");

  console.log("Bắt đầu Bài 1");

  console.log("A");

  setTimeout(() => {
    console.log("B - setTimeout 0");
  }, 0);

  Promise.resolve().then(() => {
    console.log("C - Promise.then");
  });

  console.log("D");

  // CÂU HỎI:
  // Thứ tự in ra là gì?
  // → Tự ghi lại thứ tự bạn dự đoán (ví dụ: A, D, C, B hoặc ...).
}

// ============================================
// BÀI 2: NHIỀU MICROTASK LIÊN TIẾP
// ============================================
function bai2() {
  sep("BÀI 2: nhiều Promise.then liên tiếp");

  console.log("1 - sync");

  Promise.resolve()
    .then(() => {
      console.log("2 - microtask 1");
    })
    .then(() => {
      console.log("3 - microtask 2");
    });

  Promise.resolve().then(() => {
    console.log("4 - microtask 3");
  });

  console.log("5 - sync");

  // CÂU HỎI:
  // Thứ tự in ra 1..5 là gì?
  // Gợi ý: nhớ rằng tất cả console.log trong Promise.then
  //        đều là microtask và sẽ chạy sau khi code sync xong.
}

// ============================================
// BÀI 3: mix microtask + macrotask lồng nhau
// ============================================
function bai3() {
  sep("BÀI 3: mix microtask + macrotask");

  console.log("A");

  setTimeout(() => {
    console.log("B - timeout 1");

    Promise.resolve().then(() => {
      console.log("C - microtask trong timeout 1");
    });

    console.log("D - cuối timeout 1");
  }, 0);

  setTimeout(() => {
    console.log("E - timeout 2");
  }, 0);

  Promise.resolve().then(() => {
    console.log("F - microtask 1");
  });

  console.log("G");

  // CÂU HỎI:
  // Viết thứ tự các chữ cái được in ra.
  // Chú ý:
  // - Microtask luôn chạy hết sau mỗi lần call stack rỗng
  //   (sau code sync, sau mỗi macrotask).
}

// ============================================
// BÀI 4: queueMicrotask vs Promise vs setTimeout
// ============================================
function bai4() {
  sep("BÀI 4: queueMicrotask vs Promise vs setTimeout");

  console.log("start");

  queueMicrotask(() => {
    console.log("microtask 1 - queueMicrotask");
  });

  Promise.resolve().then(() => {
    console.log("microtask 2 - Promise.then");
  });

  setTimeout(() => {
    console.log("macrotask 1 - setTimeout");
  }, 0);

  console.log("end");

  // CÂU HỎI:
  // Thứ tự log là gì? (start/end/microtask/macrotask)
}

// ============================================
// BÀI 5: Promise tạo thêm Promise bên trong
// ============================================
function bai5() {
  sep("BÀI 5: Promise lồng nhau");

  console.log("1");

  Promise.resolve()
    .then(() => {
      console.log("2");
      Promise.resolve().then(() => {
        console.log("3");
      });
    })
    .then(() => {
      console.log("4");
    });

  console.log("5");

  // CÂU HỎI:
  // Thứ tự in 1..5 là gì?
  // Gợi ý: để ý microtask có thể tạo thêm microtask mới.
}

// ============================================
// BÀI 6: Kết hợp setTimeout trong Promise
// ============================================
function bai6() {
  sep("BÀI 6: setTimeout trong Promise");

  console.log("A");

  Promise.resolve().then(() => {
    console.log("B - trong Promise.then");

    setTimeout(() => {
      console.log("C - timeout trong Promise.then");
    }, 0);
  });

  setTimeout(() => {
    console.log("D - timeout ngoài");
  }, 0);

  console.log("E");

  // CÂU HỎI:
  // Thứ tự A, B, C, D, E?
  // Lưu ý: cả C và D đều là macrotask nhưng được "xếp hàng" ở thời điểm khác nhau.
}

// ============================================
// BÀI 7 (nâng cao): Microtask có thể "starve" macrotask
// ============================================
function bai7() {
  sep("BÀI 7: Microtask starvation (nâng cao)");

  let count = 0;

  function scheduleMicrotask() {
    if (count >= 3) return; // để tránh vòng lặp vô hạn khi chạy thật
    queueMicrotask(() => {
      count++;
      console.log(`microtask ${count}`);
      scheduleMicrotask();
    });
  }

  setTimeout(() => {
    console.log("timeout");
  }, 0);

  console.log("sync start");
  scheduleMicrotask();
  console.log("sync end");

  // CÂU HỎI:
  // 1. Thứ tự log?
  // 2. Giải thích vì sao nếu không có điều kiện dừng (count >= 3)
  //    thì timeout có thể bị "chờ mãi" (starvation)?
}

// ============================================
// BÀI 8 (nâng cao): async/await + Promise + setTimeout
// ============================================
async function bai8() {
  sep("BÀI 8: async/await + Promise + setTimeout");

  console.log("1 - start");

  setTimeout(() => {
    console.log("2 - timeout 0");
  }, 0);

  const p = Promise.resolve().then(() => {
    console.log("3 - promise.then");
  });

  await p;

  console.log("4 - sau await");

  setTimeout(() => {
    console.log("5 - timeout 1");
  }, 0);

  console.log("6 - end");

  // CÂU HỎI:
  // Thứ tự 1..6 là gì?
  // Gợi ý:
  // - Phần sau `await p` thực ra được xếp như 1 microtask.
}

// ============================================
// BÀI 9 (nâng cao): then chain phức tạp + nested Promise
// ============================================
function bai9() {
  sep("BÀI 9: then chain phức tạp + nested Promise");

  console.log("A");

  Promise.resolve()
    .then(() => {
      console.log("B");
      return Promise.resolve().then(() => {
        console.log("C");
      });
    })
    .then(() => {
      console.log("D");
    });

  Promise.resolve()
    .then(() => {
      console.log("E");
    })
    .then(() => {
      console.log("F");
    });

  console.log("G");

  // CÂU HỎI:
  // Thứ tự A..G, B..F in ra như thế nào?
  // Hãy cẩn thận với Promise lồng nhau và then chain.
}

// ============================================
// BÀI 10 (nâng cao): setTimeout lồng nhau + microtask
// ============================================
function bai10() {
  sep("BÀI 10: setTimeout lồng nhau + microtask");

  console.log("start");

  setTimeout(() => {
    console.log("T1");

    Promise.resolve().then(() => {
      console.log("M1 trong T1");
    });

    setTimeout(() => {
      console.log("T2 trong T1");
    }, 0);
  }, 0);

  setTimeout(() => {
    console.log("T3");
  }, 0);

  Promise.resolve().then(() => {
    console.log("M2 ngoài");
  });

  console.log("end");

  // CÂU HỎI:
  // Viết thứ tự log: start/end/T1/M1/T2/T3/M2 ...
  // Gợi ý:
  // - M2 là microtask sau code sync.
  // - Trong T1 có thêm 1 microtask (M1) và 1 macrotask (T2).
}

// ============================================
// BÀI 11 (nâng cao): async/await lồng nhau + nhiều Promise
// ============================================
async function bai11() {
  sep("BÀI 11: async/await lồng nhau + nhiều Promise");

  console.log("A");

  async function inner() {
    console.log("B - inner start");
    await Promise.resolve().then(() => {
      console.log("C - inner then");
    });
    console.log("D - inner end");
  }

  const p = inner();

  Promise.resolve().then(() => {
    console.log("E - outer microtask");
  });

  await p;

  console.log("F - after await p");

  // CÂU HỎI:
  // Thứ tự A..F?
  // Lưu ý: inner() là async nên chính nó cũng trả về 1 Promise.
}

// ============================================
// BÀI 12 (nâng cao): Promise.resolve vs Promise.reject + catch
// ============================================
function bai12() {
  sep("BÀI 12: Promise.resolve vs Promise.reject + catch");

  console.log("1");

  Promise.resolve()
    .then(() => {
      console.log("2 - then 1");
      return Promise.reject("error");
    })
    .then(() => {
      console.log("3 - then 2 (không chạy)");
    })
    .catch(() => {
      console.log("4 - catch");
    })
    .then(() => {
      console.log("5 - then sau catch");
    });

  console.log("6");

  // CÂU HỎI:
  // Thứ tự 1..6 (và 2,4,5) như thế nào?
  // Hãy chú ý việc reject nhảy qua then vào catch.
}

// ============================================
// BÀI 13 (nâng cao): Promise.all + setTimeout
// ============================================
function bai13() {
  sep("BÀI 13: Promise.all + setTimeout");

  console.log("start");

  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("T1");
      resolve("p1 done");
    }, 0);
  });

  const p2 = Promise.resolve().then(() => {
    console.log("M1");
    return "p2 done";
  });

  Promise.all([p1, p2]).then(() => {
    console.log("ALL done");
  });

  console.log("end");

  // CÂU HỎI:
  // Thứ tự: start/end/M1/T1/ALL done?
  // Gợi ý: Promise.all chỉ resolve sau khi cả p1, p2 đều xong.
}

// ============================================
// BÀI 14 (nâng cao): Vòng lặp sync nặng + Promise + setTimeout
// ============================================
function bai14() {
  sep("BÀI 14: Vòng lặp sync nặng + bất đồng bộ");

  console.log("A");

  setTimeout(() => {
    console.log("B - timeout");
  }, 0);

  Promise.resolve().then(() => {
    console.log("C - microtask");
  });

  // Vòng lặp sync mô phỏng tác vụ nặng
  for (let i = 0; i < 3_000_000; i++) {
    // không log gì, chỉ block CPU
  }

  console.log("D");

  // CÂU HỎI:
  // Thứ tự A, B, C, D?
  // (Gợi ý: dù có setTimeout 0, nó vẫn phải đợi code sync và microtask.)
}

// ============================================
// BÀI 15 (nâng cao): Kết hợp gần như mọi thứ
// ============================================
async function bai15() {
  sep("BÀI 15: Kết hợp tổng hợp");

  console.log("1");

  setTimeout(() => {
    console.log("2 - timeout 1");
    Promise.resolve().then(() => {
      console.log("3 - microtask trong timeout 1");
    });
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("4 - microtask 1");
    })
    .then(() => {
      console.log("5 - microtask 2");
    });

  await Promise.resolve().then(() => {
    console.log("6 - await microtask");
  });

  console.log("7 - sau await");

  setTimeout(() => {
    console.log("8 - timeout 2");
  }, 0);

  console.log("9");

  // CÂU HỎI:
  // Thứ tự 1..9 (và 2,3,4,5,6,7,8) là gì?
  // Hãy cẩn thận với:
  // - chuỗi microtask trước await
  // - microtask trong timeout 1
  // - timeout 1 vs timeout 2
}

// ============================================
// CHẠY THỬ CÁC BÀI
// ============================================
console.log("╔══════════════════════════════════════════╗");
console.log("║ EVENT LOOP - CALL STACK / TASK QUEUES   ║");
console.log("╚══════════════════════════════════════════╝");

// Bạn có thể comment/uncomment từng dòng để tập trung vào 1 bài.
bai1(); // cơ bản
bai2();
bai3();
bai4();
bai5();
bai6();
bai7(); // nâng cao
bai8(); // nâng cao async/await
bai9(); // nâng cao Promise chain
bai10(); // nâng cao nested timeout + microtask
bai11(); // nâng cao async/await lồng nhau
bai12(); // nâng cao reject/catch
bai13(); // nâng cao Promise.all
bai14(); // nâng cao sync task nặng
bai15(); // tổng hợp

console.log("\n" + "=".repeat(50));
console.log("👉 Đáp án chi tiết: mở file 25-event-loop-callstack-answers.js");
console.log("=".repeat(50));
