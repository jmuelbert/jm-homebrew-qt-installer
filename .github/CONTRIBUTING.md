# Contributing to jm-homebrew-qt-installer

First off, thank you for considering contributing to jm-homebrew-qt-installer! 🎉

This project aims to set the gold standard for GitHub automation and repository configurations. We welcome contributions
of all kinds: new workflows, Taskfile improvements, documentation, and ideas.

---

This guide will walk you through our standards and the contribution process.

## 📜 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct v3.0](https://www.contributor-covenant.org/version/3/0/code_of_conduct/).
By participating, you are expected to uphold this code.
Please report unacceptable behavior to the maintainers.

---

## 🚀 Getting Started

1. **Fork & Clone**

   Fork the repository via GitHub and clone your fork locally:

   ```bash
     git clone https://github.com/your-username/jm-homebrew-qt-installer.git
     cd jm-homebrew-qt-installer
   ```

2. **Development Environment**

   We use **Node.js (v20+)**, **pnpm** and [**Task**](https://taskfile.dev/) as our primary entry point for automation.

   ```bash
     task setup
   ```

3. **Documentation**

   Documentation is built with [**Docusaurus**](https://docusaurus.io/). Preview changes locally:

   ```bash
     task docs:dev
   ```

---

## ✅ How to Contribute

### Reporting Bugs & Feature Requests 💡

- Use the [**GitHub Issues**](https://github.com/jmuelbert/jm-homebrew-qt-installer/issues) page.

- For bugs, provide steps to reproduce. For features, explain how it fits into the "standards" philosophy.

### Submitting Changes 📝

1. **Branching:** Create a descriptive branch name (for example., `feat/add-security-workflow`).

2. **Implementation:** Ensure your changes align with the standards below.

3. **Validation:** Run the local linting suite. This is critical for YAML and Workflow integrity.

   ```bash
       task lint
   ```

4. **Commits:** We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

   ```plaintext
       feat: ...  -> Triggers a MINOR version bump
       fix: ...   -> Triggers a PATCH version bump
       BREAKING CHANGE: ... -> Triggers a MAJOR version bump
       docs: add usage guide for Taskfile
   ```

## 📖 Technical Standards

### 📝 Language & Communication

- **English Only:** To ensure global accessibility, all code comments, commit messages, and documentation must be in English.
- **Workflow Prints:** All `echo` statements and log outputs in GitHub Actions must be in English.

### 🔍 Linting & Quality

- **YAML & Workflows:** We use `actionlint` and `yamllint`. Ensure no "Schema not found" errors persist unless explicitly
  ignored.

- **Local Checks:** Always run `task lint` before pushing. This executes our local quality suite including the
  `Y8r Linter` logic.

- **Security:** Always define explicit `permissions` for `GITHUB_TOKEN` and use secrets for sensitive data.

### 🛠 Taskfile

- The `Taskfile.yml` is the **Single Source of Truth** for local commands.

- **Maintainability:** Use internal tasks (prefixed with `_`) for logic that shouldn't be called directly by users.

- **Portability:** Keep tasks cross-platform compatible (avoiding specialized shell commands that fail on Windows/macOS).

- **Documentation:** Every public task must have a `desc:` field.)

### 📝 Documentation & Markdown

- **Markdown:** Follow [GitHub-flavored Markdown](https://github.github.com/gfm/).

- **Docs:** Built with [Docusaurus](https://docusaurus.io/).

## 📖 Contributor Guide: Translation & IDs

To ensure deep-links stay functional across all languages (EN, DE, ES), follow this workflow for headings.

### 🏗️ The Golden Rule: IDs First

We use explicit heading IDs (for example,`{#my-heading-id}`) to keep anchors stable. Never delete or change an ID once
it has been created and merged.

#### 1. Adding New Content (English)

When you add a new section or a new file in the `docs-site/docs/`:

- Run the ID generator:

  ```bash
     pnpm --filter docs-site docs:write-heading-ids
  ```

- Commit the generated `{#...}` IDs.

#### 2. Translating Content

We use [GitLocalize](https://gitlocalize.com/) to manage translations.

- Visit our [GitLocalize Project](https://gitlocalize.com/repo/10736).

- If translating manually: **Translate ONLY the text, leave the ID exactly as it is.**

| Language | Correct                  | Markdown            |
| -------- | ------------------------ | ------------------- |
| English  | ## Security Scans        | `{#security-scans}` |
| German   | ## Sicherheits-Scans     | `{#security-scans}` |
| Spanish  | ## Escaneos de seguridad | `{#security-scans}` |

## 🌍 Translations

We support internationalization (i18n).

1. **Source:** English (in `docs-site/docs/`).

2. **Targets:** German and Spanish (in `docs-site/i18n/[lang]/...`).

3. **Automated:** Use [GitLocalize](https://gitlocalize.com/) for the best experience.

## 📦 Releases (Maintainers only)

This project uses **Automated Semantic Releases**.

- Releases are triggered automatically when changes are merged into `main`.
- The versioning and `CHANGELOG.md` are handled by the CI pipeline based on the
  [Conventional Commits](https://www.conventionalcommits.org/) provided in PR titles and commits.

## 🏷 Versioning Standard (SemVer)

We strictly follow [Semantic Versioning 2.0.0](https://semver.org/). This is crucial for users who depend on our
workflows and configurations.

- **MAJOR (x.0.0):** Significant changes or breaking changes in workflows (for example, removing a required input or
  renaming a core task).

- **MINOR (0.x.0):** New features or new reusable workflows added in a backward-compatible manner.

- **PATCH (0.0.x):** Backward-compatible bug fixes or minor documentation tweaks.

**Tip:** Always use the `v` prefix for git tags (for example, `v1.2.3`).

## 📄 License

Contributions are licensed under the [EUPL-1.2](https://interoperable-europe.ec.europa.eu/collection/eupl/eupl-text-eupl-12).

## 🙏 Thank you

Your contributions make jm-homebrew-qt-installer more robust for everyone! 💙
