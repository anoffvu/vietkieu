"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-spring+rafz@9.7.5";
exports.ids = ["vendor-chunks/@react-spring+rafz@9.7.5"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@react-spring+rafz@9.7.5/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-spring+rafz@9.7.5/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __raf: () => (/* binding */ __raf),\n/* harmony export */   raf: () => (/* binding */ raf)\n/* harmony export */ });\n// src/index.ts\nvar updateQueue = makeQueue();\nvar raf = (fn)=>schedule(fn, updateQueue);\nvar writeQueue = makeQueue();\nraf.write = (fn)=>schedule(fn, writeQueue);\nvar onStartQueue = makeQueue();\nraf.onStart = (fn)=>schedule(fn, onStartQueue);\nvar onFrameQueue = makeQueue();\nraf.onFrame = (fn)=>schedule(fn, onFrameQueue);\nvar onFinishQueue = makeQueue();\nraf.onFinish = (fn)=>schedule(fn, onFinishQueue);\nvar timeouts = [];\nraf.setTimeout = (handler, ms)=>{\n    const time = raf.now() + ms;\n    const cancel = ()=>{\n        const i = timeouts.findIndex((t)=>t.cancel == cancel);\n        if (~i) timeouts.splice(i, 1);\n        pendingCount -= ~i ? 1 : 0;\n    };\n    const timeout = {\n        time,\n        handler,\n        cancel\n    };\n    timeouts.splice(findTimeout(time), 0, timeout);\n    pendingCount += 1;\n    start();\n    return timeout;\n};\nvar findTimeout = (time)=>~(~timeouts.findIndex((t)=>t.time > time) || ~timeouts.length);\nraf.cancel = (fn)=>{\n    onStartQueue.delete(fn);\n    onFrameQueue.delete(fn);\n    onFinishQueue.delete(fn);\n    updateQueue.delete(fn);\n    writeQueue.delete(fn);\n};\nraf.sync = (fn)=>{\n    sync = true;\n    raf.batchedUpdates(fn);\n    sync = false;\n};\nraf.throttle = (fn)=>{\n    let lastArgs;\n    function queuedFn() {\n        try {\n            fn(...lastArgs);\n        } finally{\n            lastArgs = null;\n        }\n    }\n    function throttled(...args) {\n        lastArgs = args;\n        raf.onStart(queuedFn);\n    }\n    throttled.handler = fn;\n    throttled.cancel = ()=>{\n        onStartQueue.delete(queuedFn);\n        lastArgs = null;\n    };\n    return throttled;\n};\nvar nativeRaf =  false ? 0 : // eslint-disable-next-line @typescript-eslint/no-empty-function\n()=>{};\nraf.use = (impl)=>nativeRaf = impl;\nraf.now = typeof performance != \"undefined\" ? ()=>performance.now() : Date.now;\nraf.batchedUpdates = (fn)=>fn();\nraf.catch = console.error;\nraf.frameLoop = \"always\";\nraf.advance = ()=>{\n    if (raf.frameLoop !== \"demand\") {\n        console.warn(\"Cannot call the manual advancement of rafz whilst frameLoop is not set as demand\");\n    } else {\n        update();\n    }\n};\nvar ts = -1;\nvar pendingCount = 0;\nvar sync = false;\nfunction schedule(fn, queue) {\n    if (sync) {\n        queue.delete(fn);\n        fn(0);\n    } else {\n        queue.add(fn);\n        start();\n    }\n}\nfunction start() {\n    if (ts < 0) {\n        ts = 0;\n        if (raf.frameLoop !== \"demand\") {\n            nativeRaf(loop);\n        }\n    }\n}\nfunction stop() {\n    ts = -1;\n}\nfunction loop() {\n    if (~ts) {\n        nativeRaf(loop);\n        raf.batchedUpdates(update);\n    }\n}\nfunction update() {\n    const prevTs = ts;\n    ts = raf.now();\n    const count = findTimeout(ts);\n    if (count) {\n        eachSafely(timeouts.splice(0, count), (t)=>t.handler());\n        pendingCount -= count;\n    }\n    if (!pendingCount) {\n        stop();\n        return;\n    }\n    onStartQueue.flush();\n    updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);\n    onFrameQueue.flush();\n    writeQueue.flush();\n    onFinishQueue.flush();\n}\nfunction makeQueue() {\n    let next = /* @__PURE__ */ new Set();\n    let current = next;\n    return {\n        add (fn) {\n            pendingCount += current == next && !next.has(fn) ? 1 : 0;\n            next.add(fn);\n        },\n        delete (fn) {\n            pendingCount -= current == next && next.has(fn) ? 1 : 0;\n            return next.delete(fn);\n        },\n        flush (arg) {\n            if (current.size) {\n                next = /* @__PURE__ */ new Set();\n                pendingCount -= current.size;\n                eachSafely(current, (fn)=>fn(arg) && next.add(fn));\n                pendingCount += next.size;\n                current = next;\n            }\n        }\n    };\n}\nfunction eachSafely(values, each) {\n    values.forEach((value)=>{\n        try {\n            each(value);\n        } catch (e) {\n            raf.catch(e);\n        }\n    });\n}\nvar __raf = {\n    /** The number of pending tasks */ count () {\n        return pendingCount;\n    },\n    /** Whether there's a raf update loop running */ isRunning () {\n        return ts >= 0;\n    },\n    /** Clear internal state. Never call from update loop! */ clear () {\n        ts = -1;\n        timeouts = [];\n        onStartQueue = makeQueue();\n        updateQueue = makeQueue();\n        onFrameQueue = makeQueue();\n        writeQueue = makeQueue();\n        onFinishQueue = makeQueue();\n        pendingCount = 0;\n    }\n};\n //# sourceMappingURL=react-spring_rafz.modern.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXNwcmluZytyYWZ6QDkuNy41L25vZGVfbW9kdWxlcy9AcmVhY3Qtc3ByaW5nL3JhZnovZGlzdC9yZWFjdC1zcHJpbmdfcmFmei5tb2Rlcm4ubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZUFBZTtBQUNmLElBQUlBLGNBQWNDO0FBQ2xCLElBQUlDLE1BQU0sQ0FBQ0MsS0FBT0MsU0FBU0QsSUFBSUg7QUFDL0IsSUFBSUssYUFBYUo7QUFDakJDLElBQUlJLEtBQUssR0FBRyxDQUFDSCxLQUFPQyxTQUFTRCxJQUFJRTtBQUNqQyxJQUFJRSxlQUFlTjtBQUNuQkMsSUFBSU0sT0FBTyxHQUFHLENBQUNMLEtBQU9DLFNBQVNELElBQUlJO0FBQ25DLElBQUlFLGVBQWVSO0FBQ25CQyxJQUFJUSxPQUFPLEdBQUcsQ0FBQ1AsS0FBT0MsU0FBU0QsSUFBSU07QUFDbkMsSUFBSUUsZ0JBQWdCVjtBQUNwQkMsSUFBSVUsUUFBUSxHQUFHLENBQUNULEtBQU9DLFNBQVNELElBQUlRO0FBQ3BDLElBQUlFLFdBQVcsRUFBRTtBQUNqQlgsSUFBSVksVUFBVSxHQUFHLENBQUNDLFNBQVNDO0lBQ3pCLE1BQU1DLE9BQU9mLElBQUlnQixHQUFHLEtBQUtGO0lBQ3pCLE1BQU1HLFNBQVM7UUFDYixNQUFNQyxJQUFJUCxTQUFTUSxTQUFTLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUgsTUFBTSxJQUFJQTtRQUNoRCxJQUFJLENBQUNDLEdBQ0hQLFNBQVNVLE1BQU0sQ0FBQ0gsR0FBRztRQUNyQkksZ0JBQWdCLENBQUNKLElBQUksSUFBSTtJQUMzQjtJQUNBLE1BQU1LLFVBQVU7UUFBRVI7UUFBTUY7UUFBU0k7SUFBTztJQUN4Q04sU0FBU1UsTUFBTSxDQUFDRyxZQUFZVCxPQUFPLEdBQUdRO0lBQ3RDRCxnQkFBZ0I7SUFDaEJHO0lBQ0EsT0FBT0Y7QUFDVDtBQUNBLElBQUlDLGNBQWMsQ0FBQ1QsT0FBUyxDQUFFLEVBQUNKLFNBQVNR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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlldGtpZXUvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXNwcmluZytyYWZ6QDkuNy41L25vZGVfbW9kdWxlcy9AcmVhY3Qtc3ByaW5nL3JhZnovZGlzdC9yZWFjdC1zcHJpbmdfcmFmei5tb2Rlcm4ubWpzPzhjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LnRzXG52YXIgdXBkYXRlUXVldWUgPSBtYWtlUXVldWUoKTtcbnZhciByYWYgPSAoZm4pID0+IHNjaGVkdWxlKGZuLCB1cGRhdGVRdWV1ZSk7XG52YXIgd3JpdGVRdWV1ZSA9IG1ha2VRdWV1ZSgpO1xucmFmLndyaXRlID0gKGZuKSA9PiBzY2hlZHVsZShmbiwgd3JpdGVRdWV1ZSk7XG52YXIgb25TdGFydFF1ZXVlID0gbWFrZVF1ZXVlKCk7XG5yYWYub25TdGFydCA9IChmbikgPT4gc2NoZWR1bGUoZm4sIG9uU3RhcnRRdWV1ZSk7XG52YXIgb25GcmFtZVF1ZXVlID0gbWFrZVF1ZXVlKCk7XG5yYWYub25GcmFtZSA9IChmbikgPT4gc2NoZWR1bGUoZm4sIG9uRnJhbWVRdWV1ZSk7XG52YXIgb25GaW5pc2hRdWV1ZSA9IG1ha2VRdWV1ZSgpO1xucmFmLm9uRmluaXNoID0gKGZuKSA9PiBzY2hlZHVsZShmbiwgb25GaW5pc2hRdWV1ZSk7XG52YXIgdGltZW91dHMgPSBbXTtcbnJhZi5zZXRUaW1lb3V0ID0gKGhhbmRsZXIsIG1zKSA9PiB7XG4gIGNvbnN0IHRpbWUgPSByYWYubm93KCkgKyBtcztcbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGNvbnN0IGkgPSB0aW1lb3V0cy5maW5kSW5kZXgoKHQpID0+IHQuY2FuY2VsID09IGNhbmNlbCk7XG4gICAgaWYgKH5pKVxuICAgICAgdGltZW91dHMuc3BsaWNlKGksIDEpO1xuICAgIHBlbmRpbmdDb3VudCAtPSB+aSA/IDEgOiAwO1xuICB9O1xuICBjb25zdCB0aW1lb3V0ID0geyB0aW1lLCBoYW5kbGVyLCBjYW5jZWwgfTtcbiAgdGltZW91dHMuc3BsaWNlKGZpbmRUaW1lb3V0KHRpbWUpLCAwLCB0aW1lb3V0KTtcbiAgcGVuZGluZ0NvdW50ICs9IDE7XG4gIHN0YXJ0KCk7XG4gIHJldHVybiB0aW1lb3V0O1xufTtcbnZhciBmaW5kVGltZW91dCA9ICh0aW1lKSA9PiB+KH50aW1lb3V0cy5maW5kSW5kZXgoKHQpID0+IHQudGltZSA+IHRpbWUpIHx8IH50aW1lb3V0cy5sZW5ndGgpO1xucmFmLmNhbmNlbCA9IChmbikgPT4ge1xuICBvblN0YXJ0UXVldWUuZGVsZXRlKGZuKTtcbiAgb25GcmFtZVF1ZXVlLmRlbGV0ZShmbik7XG4gIG9uRmluaXNoUXVldWUuZGVsZXRlKGZuKTtcbiAgdXBkYXRlUXVldWUuZGVsZXRlKGZuKTtcbiAgd3JpdGVRdWV1ZS5kZWxldGUoZm4pO1xufTtcbnJhZi5zeW5jID0gKGZuKSA9PiB7XG4gIHN5bmMgPSB0cnVlO1xuICByYWYuYmF0Y2hlZFVwZGF0ZXMoZm4pO1xuICBzeW5jID0gZmFsc2U7XG59O1xucmFmLnRocm90dGxlID0gKGZuKSA9PiB7XG4gIGxldCBsYXN0QXJncztcbiAgZnVuY3Rpb24gcXVldWVkRm4oKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKC4uLmxhc3RBcmdzKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgbGFzdEFyZ3MgPSBudWxsO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0aHJvdHRsZWQoLi4uYXJncykge1xuICAgIGxhc3RBcmdzID0gYXJncztcbiAgICByYWYub25TdGFydChxdWV1ZWRGbik7XG4gIH1cbiAgdGhyb3R0bGVkLmhhbmRsZXIgPSBmbjtcbiAgdGhyb3R0bGVkLmNhbmNlbCA9ICgpID0+IHtcbiAgICBvblN0YXJ0UXVldWUuZGVsZXRlKHF1ZXVlZEZuKTtcbiAgICBsYXN0QXJncyA9IG51bGw7XG4gIH07XG4gIHJldHVybiB0aHJvdHRsZWQ7XG59O1xudmFyIG5hdGl2ZVJhZiA9IHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiAoXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgKCkgPT4ge1xuICB9XG4pO1xucmFmLnVzZSA9IChpbXBsKSA9PiBuYXRpdmVSYWYgPSBpbXBsO1xucmFmLm5vdyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPSBcInVuZGVmaW5lZFwiID8gKCkgPT4gcGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdztcbnJhZi5iYXRjaGVkVXBkYXRlcyA9IChmbikgPT4gZm4oKTtcbnJhZi5jYXRjaCA9IGNvbnNvbGUuZXJyb3I7XG5yYWYuZnJhbWVMb29wID0gXCJhbHdheXNcIjtcbnJhZi5hZHZhbmNlID0gKCkgPT4ge1xuICBpZiAocmFmLmZyYW1lTG9vcCAhPT0gXCJkZW1hbmRcIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiQ2Fubm90IGNhbGwgdGhlIG1hbnVhbCBhZHZhbmNlbWVudCBvZiByYWZ6IHdoaWxzdCBmcmFtZUxvb3AgaXMgbm90IHNldCBhcyBkZW1hbmRcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdXBkYXRlKCk7XG4gIH1cbn07XG52YXIgdHMgPSAtMTtcbnZhciBwZW5kaW5nQ291bnQgPSAwO1xudmFyIHN5bmMgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlKGZuLCBxdWV1ZSkge1xuICBpZiAoc3luYykge1xuICAgIHF1ZXVlLmRlbGV0ZShmbik7XG4gICAgZm4oMCk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWUuYWRkKGZuKTtcbiAgICBzdGFydCgpO1xuICB9XG59XG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKHRzIDwgMCkge1xuICAgIHRzID0gMDtcbiAgICBpZiAocmFmLmZyYW1lTG9vcCAhPT0gXCJkZW1hbmRcIikge1xuICAgICAgbmF0aXZlUmFmKGxvb3ApO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgdHMgPSAtMTtcbn1cbmZ1bmN0aW9uIGxvb3AoKSB7XG4gIGlmICh+dHMpIHtcbiAgICBuYXRpdmVSYWYobG9vcCk7XG4gICAgcmFmLmJhdGNoZWRVcGRhdGVzKHVwZGF0ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29uc3QgcHJldlRzID0gdHM7XG4gIHRzID0gcmFmLm5vdygpO1xuICBjb25zdCBjb3VudCA9IGZpbmRUaW1lb3V0KHRzKTtcbiAgaWYgKGNvdW50KSB7XG4gICAgZWFjaFNhZmVseSh0aW1lb3V0cy5zcGxpY2UoMCwgY291bnQpLCAodCkgPT4gdC5oYW5kbGVyKCkpO1xuICAgIHBlbmRpbmdDb3VudCAtPSBjb3VudDtcbiAgfVxuICBpZiAoIXBlbmRpbmdDb3VudCkge1xuICAgIHN0b3AoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgb25TdGFydFF1ZXVlLmZsdXNoKCk7XG4gIHVwZGF0ZVF1ZXVlLmZsdXNoKHByZXZUcyA/IE1hdGgubWluKDY0LCB0cyAtIHByZXZUcykgOiAxNi42NjcpO1xuICBvbkZyYW1lUXVldWUuZmx1c2goKTtcbiAgd3JpdGVRdWV1ZS5mbHVzaCgpO1xuICBvbkZpbmlzaFF1ZXVlLmZsdXNoKCk7XG59XG5mdW5jdGlvbiBtYWtlUXVldWUoKSB7XG4gIGxldCBuZXh0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgbGV0IGN1cnJlbnQgPSBuZXh0O1xuICByZXR1cm4ge1xuICAgIGFkZChmbikge1xuICAgICAgcGVuZGluZ0NvdW50ICs9IGN1cnJlbnQgPT0gbmV4dCAmJiAhbmV4dC5oYXMoZm4pID8gMSA6IDA7XG4gICAgICBuZXh0LmFkZChmbik7XG4gICAgfSxcbiAgICBkZWxldGUoZm4pIHtcbiAgICAgIHBlbmRpbmdDb3VudCAtPSBjdXJyZW50ID09IG5leHQgJiYgbmV4dC5oYXMoZm4pID8gMSA6IDA7XG4gICAgICByZXR1cm4gbmV4dC5kZWxldGUoZm4pO1xuICAgIH0sXG4gICAgZmx1c2goYXJnKSB7XG4gICAgICBpZiAoY3VycmVudC5zaXplKSB7XG4gICAgICAgIG5leHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgICBwZW5kaW5nQ291bnQgLT0gY3VycmVudC5zaXplO1xuICAgICAgICBlYWNoU2FmZWx5KGN1cnJlbnQsIChmbikgPT4gZm4oYXJnKSAmJiBuZXh0LmFkZChmbikpO1xuICAgICAgICBwZW5kaW5nQ291bnQgKz0gbmV4dC5zaXplO1xuICAgICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBlYWNoU2FmZWx5KHZhbHVlcywgZWFjaCkge1xuICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgZWFjaCh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmFmLmNhdGNoKGUpO1xuICAgIH1cbiAgfSk7XG59XG52YXIgX19yYWYgPSB7XG4gIC8qKiBUaGUgbnVtYmVyIG9mIHBlbmRpbmcgdGFza3MgKi9cbiAgY291bnQoKSB7XG4gICAgcmV0dXJuIHBlbmRpbmdDb3VudDtcbiAgfSxcbiAgLyoqIFdoZXRoZXIgdGhlcmUncyBhIHJhZiB1cGRhdGUgbG9vcCBydW5uaW5nICovXG4gIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gdHMgPj0gMDtcbiAgfSxcbiAgLyoqIENsZWFyIGludGVybmFsIHN0YXRlLiBOZXZlciBjYWxsIGZyb20gdXBkYXRlIGxvb3AhICovXG4gIGNsZWFyKCkge1xuICAgIHRzID0gLTE7XG4gICAgdGltZW91dHMgPSBbXTtcbiAgICBvblN0YXJ0UXVldWUgPSBtYWtlUXVldWUoKTtcbiAgICB1cGRhdGVRdWV1ZSA9IG1ha2VRdWV1ZSgpO1xuICAgIG9uRnJhbWVRdWV1ZSA9IG1ha2VRdWV1ZSgpO1xuICAgIHdyaXRlUXVldWUgPSBtYWtlUXVldWUoKTtcbiAgICBvbkZpbmlzaFF1ZXVlID0gbWFrZVF1ZXVlKCk7XG4gICAgcGVuZGluZ0NvdW50ID0gMDtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIF9fcmFmLFxuICByYWZcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1zcHJpbmdfcmFmei5tb2Rlcm4ubWpzLm1hcCJdLCJuYW1lcyI6WyJ1cGRhdGVRdWV1ZSIsIm1ha2VRdWV1ZSIsInJhZiIsImZuIiwic2NoZWR1bGUiLCJ3cml0ZVF1ZXVlIiwid3JpdGUiLCJvblN0YXJ0UXVldWUiLCJvblN0YXJ0Iiwib25GcmFtZVF1ZXVlIiwib25GcmFtZSIsIm9uRmluaXNoUXVldWUiLCJvbkZpbmlzaCIsInRpbWVvdXRzIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJtcyIsInRpbWUiLCJub3ciLCJjYW5jZWwiLCJpIiwiZmluZEluZGV4IiwidCIsInNwbGljZSIsInBlbmRpbmdDb3VudCIsInRpbWVvdXQiLCJmaW5kVGltZW91dCIsInN0YXJ0IiwibGVuZ3RoIiwiZGVsZXRlIiwic3luYyIsImJhdGNoZWRVcGRhdGVzIiwidGhyb3R0bGUiLCJsYXN0QXJncyIsInF1ZXVlZEZuIiwidGhyb3R0bGVkIiwiYXJncyIsIm5hdGl2ZVJhZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVzZSIsImltcGwiLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImZyYW1lTG9vcCIsImFkdmFuY2UiLCJ3YXJuIiwidXBkYXRlIiwidHMiLCJxdWV1ZSIsImFkZCIsImxvb3AiLCJzdG9wIiwicHJldlRzIiwiY291bnQiLCJlYWNoU2FmZWx5IiwiZmx1c2giLCJNYXRoIiwibWluIiwibmV4dCIsIlNldCIsImN1cnJlbnQiLCJoYXMiLCJhcmciLCJzaXplIiwidmFsdWVzIiwiZWFjaCIsImZvckVhY2giLCJ2YWx1ZSIsImUiLCJfX3JhZiIsImlzUnVubmluZyIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@react-spring+rafz@9.7.5/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs\n");

/***/ })

};
;