const baseUrl =
  process.env.DOCS_ENV === "development" ? "/" : "/rescript-apollo-client/";

module.exports = {
  title: "ReScript Apollo Client",
  tagline: "Rescript bindings for the Apollo Client ecosystem",
  url: "https://reasonml-community.github.io/rescript-apollo-client",
  baseUrl,
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "reasonml-community", // Usually your GitHub org/user name.
  projectName: "rescript-apollo-client", // Usually your repo name.
  themeConfig: {
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    navbar: {
      title: "ReScript Apollo Client",
      logo: {
        alt: "ReScript Apollo Client Logo",
        src: "img/small_logo.png",
      },
      items: [
        {
          label: "Docs",
          to: "docs/",
          activeBasePath: "docs",
          position: "left",
        },
        {
          label: "Changelog",
          to:
            "https://github.com/reasonml-community/rescript-apollo-client/releases/",
          position: "left",
        },
        { label: "Contributing", to: "docs/contributing", position: "right" },
        {
          label: "GitHub",
          href: "https://github.com/reasonml-community/rescript-apollo-client",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/reasonml-community/rescript-apollo-client/edit/master/documentation",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
