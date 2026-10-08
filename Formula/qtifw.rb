#
# SPDX-FileCopyrightText: 2021-2026 Jürgen Mülbert <juergen.muelbert@gmail.com>
#
# SPDX-License-Identifier: EUPL-1.2
#
# frozen_string_literal: true

# Class Qtifw to install
# the QT Installer Framework
# with homebrew
class Qtifw < Formula
  desc "Qt Installer Framework Installer"
  homepage "https://doc.qt.io/qtinstallerframework/"
  url "https://download.qt.io/official_releases/qt-installer-framework/4.11.0//installer-framework-everywhere-src-4.11.0.tar.xz"
  sha256 "4abdad903a52b1c20bb46c715d7d12c65905791a3e366e574212fdd74cc47629" # DevSkim: ignore DS173237
  license "EUPL-1.2"

  depends_on "xz" => :build
  depends_on "pkgconf" => :build
  depends_on "cmake" => :build
  depends_on "qttools" => :build

  depends_on "qtbase"

  on_macos do
    depends_on "gmp"
    depends_on "mpfr"
  end

  def install
    system Formula["qtbase"].bin / "qmake", "installerfw.pro"
    system "make"
    system "make", "install"
  end

  test do
    assert_match "archivegen #{version}", shell_output("#{bin}/archivegen --version").chomp
  end
end
