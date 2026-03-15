# Context Commit

Context Commit adds simple Git commands directly to the file context menu in Visual Studio Code.
It allows you to stage files and commit them without opening the Source Control panel.

The extension is designed for users like me who prefer to commit most changes per-file.

---

# Features

## Git Add File
Stage a file directly from the Explorer.

**Usage**

1. Right-click a file in the Explorer
2. Click:

```

Git Add File

```

This runs:

```

git add <file>

```

You can stage multiple files by repeating this action.

---

## Commit File
Stage selected file and commit all staged files with a commit message.

**Usage**

1. Right-click any file
2. Click:

```

Commit File

```

3. Enter a commit message

The extension runs:

```

git add <file>
git commit -m "message"

```

Any files previously staged using **Git Add File** will be included in the commit.

---

# Example Workflow

Typical workflow using the extension:

1. Right-click files → **Git Add File**
2. Stage multiple files
3. Right-click one file → **Commit File**
4. Enter commit message
5. Commit is created

No Source Control panel is required. Pushing changes is still manual.

---

# Requirements

- Git must be installed and available in your system PATH.
- The opened folder must be a Git repository.

You can verify Git is installed with:

```

git --version

```

---

# Extension Settings

This extension currently does not add any custom settings.

---

# Known Issues

- The extension commits staged files from the current workspace root.

---

# Release Notes

## 1.0.1

- Renamed command from commitFile to contextcommit
- Added git repo check to the context menu buttons
- Renamed the 'Commit File' button to 'Git Commit File'
- Separated the git buttons into a group

## 1.0.0

Initial release.

Features:

- Add files to Git staging from Explorer
- Commit staged files with a message from Explorer

---

# License

MIT License
