# JSON to YAML Converter

Convert JSON to YAML using the js-yaml library, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/developer-tools/json-to-yaml-online

## How It Works

The input is parsed with `JSON.parse(text)` to validate it and obtain a JavaScript object. The parsed object is then passed to `jsyaml.dump(parsed)` from the external js-yaml library, which serializes it as YAML with default formatting options. If `jsyaml` is not available (CDN load failure), an error is shown. JSON parse errors are caught and displayed with the error message.

## Features

- JSON validation before conversion
- YAML output via js-yaml `dump`
- Error display for invalid JSON or missing library
- Copy output to clipboard

## Browser APIs Used

- Clipboard API (`navigator.clipboard.writeText`)

## Code Structure

| File | Description |
|------|-------------|
| `json-to-yaml.js` | `JSON.parse` validation, `jsyaml.dump(parsed)` conversion, library availability check, error display |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| `#inputArea` | JSON input |
| `#outputArea` | YAML output |
| `#convertBtn` | Convert button |
| `#copyBtn` | Copy YAML to clipboard |
| `#clearBtn` | Clear both fields |
| `#status` | Status and error messages |

## License

MIT
