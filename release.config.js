module.exports = {
  verifyConditions: [
    // '@semantic-release/commit-analyzer',
    // '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github'
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        }
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        },
        writerOpts: {
          version: 'v0.0.4',
          commitsSort: ['subject', 'scope']
        }
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: '.',
        npmPublish: false,
        tarballDir: false
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'src/**', 'CHANGELOG.md'],
        message: 'chore(release): version ${nextRelease.version}'
      }
    ],
    [
      '@semantic-release/github',
      {
        assets: ['!.env']
      }
    ]
  ]
}
