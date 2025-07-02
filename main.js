// ==UserScript==
// @name         LeetCode Minus User
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  I am not a LeetCode Plus user and I don’t want to see LeetCode member-only problems.
// @author       liuxueyang
// @match        https://leetcode.cn/*
// @match        https://leetcode.com/*
// @license      MIT
// @supportURL   https://github.com/liuxueyang/leetcode-minus-user/issues
// @homepageURL  https://github.com/liuxueyang/leetcode-minus-user
// ==/UserScript==

(function() {
    'use strict';

    function hideLockedProblems() {
        document.querySelectorAll('.fa-lock').forEach(lock => {
            const item = lock.closest('a');
            if (item) {
                item.style.display = 'none';
            }
        });
    }

    hideLockedProblems();

    const observer = new MutationObserver(hideLockedProblems);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
