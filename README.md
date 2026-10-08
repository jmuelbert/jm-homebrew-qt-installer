# jm-homebrew-qt-installer

<div align="center">

[![Security Scorecard][scorecard-badge]][scorecard-link] &nbsp;

[![OpenSSF Best Practices][OpenSSF_badge]][OpenSSF_link]

[![REUSE Compliance][REUSE_badge]][REUSE_link]

&nbsp; &nbsp; │ &nbsp; &nbsp;

[![Pipeline][pipeline-badge]][pipeline-link] &nbsp;
[![Governance][governance-badge]][governance-link] &nbsp;
[![Documentation Deployment][docs-deploy-badge]][docs-deploy-link] &nbsp;

[![MegaLinter][MegaLinter-badge]][MegaLinter-link]

&nbsp; &nbsp; │ &nbsp; &nbsp;‰

[![License: EUPL 1.2][eupl-badge]][eupl-link] &nbsp;
[![License: CC BY 4.0][cc-badge]][cc-link]

[![Docs][documentation-badge]][documentation-link]

</div>

---

Homebrew formula and helper tools to install and test the Qt Installer Framework (qtifw); CI-ready, versioned, and
packaged for reproducible installer builds.

## Overview

The Qt Installer Framework is a set of tools and utilities to create installers for the platforms that Qt supports.
This project provides a Homebrew formula along with helper tools that simplify the installation and testing of qtifw on
macOS. It's designed with CI/CD pipelines in mind, ensuring versioned and reproducible builds for your installer projects.

## Installation

This project is hosted on Codeberg. The Homebrew formula is mirrored on GitHub
for compatibility with Homebrew's default tap resolution.

```bash

brew install jmuelbert/<your-tap>/qt-installer-framework

```

Or, if you've added the tap:

```bash

brew tap jmuelbert/<your-tap>
brew install qt-installer-framework

```

## Features

- **Easy installation** via Homebrew -> no manual downloads needed
- **Automatic dependency management** -> all required dependencies are handled
- **macOS optimized** -> built and tested for macOS compatibility
- **CI-ready** -> designed for continuous integration workflows
- **Versioned releases** -> reproducible builds with pinned versions
- **Helper tools** -> additional utilities for testing and validation
- **Regular updates** ->formula stays current with Qt Installer Framework releases

## Requirements

- macOS 10.13 or later
- Homebrew (if not installed, see [brew.sh](https://brew.sh/))

## Usage

After installation, you can use the Qt Installer Framework tools:

```bash

binarycreator --help
repogen --help

```

For detailed documentation on the Qt Installer Framework, visit the [official Qt documentation](https://doc.qt.io/qtinstallerframework/).

## Uninstallation

To remove the formula:

```bash

brew uninstall qt-installer-framework

```

## Troubleshooting

### Formula not found

Ensure the tap is added correctly:

```bash

brew tap jmuelbert/<your-tap>

```

### Installation fails

Check that your Homebrew is up to date:

```bash

brew update
brew doctor

```

## 📚 Documentation

**Explore our full documentation at: [https://jmuelbert.github.io/jm-homebrew-qt-installer/](https://jmuelbert.github.io/jm-homebrew-qt-installer/)**

- **Contributing:** Check out our [Contributing Guidelines][contributing-guidelines-link].
- **Discussions:** Join our [Discussions][discussions-link].

---

## ⚖️ License

This project follows a dual-licensing strategy:

- **Code & Workflows:** Licensed under the [European Public License 1.2][eupl-link].
- **Documentation:** Licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)][cc-link].
- **Compliance:** [REUSE compliant][license-link]

<!-- Project -->

[license-link]: ./LICENSES
[eupl-link]: ./LICENSES/EUPL-1.2.txt
[eupl-badge]: https://img.shields.io/badge/License-EUPL%201.2-blue.svg
[cc-link]: ./LICENSES/CC-BY-4.0.txt
[cc-badge]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
[contributing-guidelines-link]: ./.github/CONTRIBUTING.md
[discussions-link]: https://github.com/jmuelbert/jm-homebrew-qt-installer/discussions

<!-- Workflows -->

[pipeline-badge]: https://github.com/jmuelbert/jm-homebrew-qt-installer/actions/workflows/shared-megalinter.yml/badge.svg
[pipeline-link]: https://github.com/jmuelbert/jm-homebrew-qt-installer/actions/workflows/shared-megalinter.yml
[governance-badge]: https://github.com/jmuelbert/jm-homebrew-qt-installer/actions/workflows/shared-governance.yml/badge.svg
[governance-link]: https://github.com/jmuelbert/jm-homebrew-qt-installer/actions/workflows/shared-governance.yml
[docs-deploy-badge]: https://github.com/jmuelbert/jm-homebrew-qt-installer/actions/workflows/docs-deployment.yml/badge.svg
[docs-deploy-link]: https://github.com/jmuelbert/jm-homebrew-qt-installer/actions/workflows/docs-deployment.yml
[REUSE_badge]: https://api.reuse.software/badge/github.com/jmuelbert/jm-homebrew-qt-installer
[REUSE_link]: https://api.reuse.software/info/github.com/jmuelbert/jm-homebrew-qt-installer

<!-- Project Docs -->

[documentation-badge]: https://img.shields.io/badge/Docs-github.io-blue
[documentation-link]: https://jmuelbert.github.io/jm-homebrew-qt-installer

<!--- External -->

[scorecard-badge]: https://img.shields.io/ossf-scorecard/github.com/jmuelbert/jm-homebrew-qt-installer?label=openssf+scorecard&style=flat
[scorecard-link]: https://securityscorecards.dev/viewer/?uri=github.com/jmuelbert/jm-homebrew-qt-installer
[OpenSSF_badge]: https://www.bestpractices.dev/projects/15157/badge
[OpenSSF_link]: https://www.bestpractices.dev/en/projects/15157/passing
[MegaLinter-badge]: https://img.shields.io/badge/Linter-MegaLinter-blueviolet
[MegaLinter-link]: https://megalinter.io
