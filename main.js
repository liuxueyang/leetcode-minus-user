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
