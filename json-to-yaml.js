(function() {
    var inputEl = document.getElementById('inputArea');
    var outputEl = document.getElementById('outputArea');
    var statusEl = document.getElementById('status');
    var convertBtn = document.getElementById('convertBtn');
    var copyBtn = document.getElementById('copyBtn');
    var clearBtn = document.getElementById('clearBtn');

    function setStatus(msg, type) {
        if (!statusEl) return;
        statusEl.textContent = msg;
        statusEl.className = 'code-status ' + (type || '');
    }

    function convert() {
        if (!inputEl || !outputEl) return;
        var text = inputEl.value.trim();
        if (!text) { setStatus('', ''); outputEl.value = ''; return; }
        if (typeof jsyaml === 'undefined') {
            setStatus('YAML library not loaded. Check your internet connection.', 'error');
            return;
        }
        try {
            var parsed = JSON.parse(text);
            outputEl.value = jsyaml.dump(parsed);
            inputEl.classList.remove('error');
            setStatus('JSON converted to YAML successfully.', 'success');
        } catch (e) {
            inputEl.classList.add('error');
            setStatus('Invalid JSON: ' + e.message, 'error');
            outputEl.value = '';
        }
    }

    if (convertBtn) convertBtn.addEventListener('click', convert);

    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            if (!outputEl || !outputEl.value) return;
            navigator.clipboard.writeText(outputEl.value).then(function() {
                var orig = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(function() { copyBtn.textContent = orig; }, 1500);
            });
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            inputEl.value = '';
            outputEl.value = '';
            inputEl.classList.remove('error');
            setStatus('', '');
        });
    }
})();
