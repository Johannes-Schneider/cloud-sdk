module.exports = {
  docsJavaSidebar: [
    'overview-cloud-sdk-for-java',
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'OData',
          items: [
            'features/odata/overview',
            'features/odata/vdm-generator',
            'features/odata/v2-vdm-client',
            'features/odata/v4-vdm-client',
            'features/odata/generic-untyped-odata-client'
          ]
        },
        {
          type: 'category',
          label: 'OpenAPI',
          items: [
            'features/rest/overview',
            'features/rest/generate-rest-client'
          ]
        },
        {
          type: 'category',
          label: 'Connectivity',
          items: [
            'features/connectivity/destination-service',
            'features/connectivity/btp-destination-service',
            'features/connectivity/on-premise',
            'features/connectivity/service-bindings',
            'features/connectivity/http-destinations',
            'features/connectivity/http-client',
            'features/connectivity/running-locally',
            'features/connectivity/mtls'
          ]
        },
        {
          type: 'category',
          label: 'Multitenancy',
          items: ['features/multi-tenancy/thread-context']
        },
        {
          type: 'category',
          label: 'Resilience & Caching',
          items: [
            'features/resilience/resilience',
            'features/resilience/caching'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Environments',
      items: [
        'environments/overview',
        'environments/cloud-foundry',
        'environments/kubernetes-gardener',
        'environments/kubernetes-kyma'
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/5.0-upgrade-steps',
        'guides/manage-dependencies',
        'guides/cap-sdk-integration',
        'guides/logging-overview',
        'guides/spring-boot-war-deployment',
        'guides/tutorial-overview-sdk-java',
        'guides/cloud-foundry-xsuaa-service',
        'guides/cf-deploy',
        'guides/cf-cli',
        'guides/sap-cloud-sdk-linux-how-to'
      ]
    },
    {
      type: 'category',
      label: 'Video Tutorials',
      items: [
        'video/video-tutorial-about-getting-started-with-sap-cloud-sdk-for-java',
        'video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java',
        'video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java',
        'video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client'
      ]
    },
    'troubleshooting-frequent-problems',
    'release-policy',
    'release-notes',
    'support',
    'frequently-asked-questions',
    {
      type: 'link',
      label: 'API Reference',
      href: 'pathname:///java-api/v5/index.html'
    },
    {
      type: 'link',
      label: 'Maven Central',
      href: 'https://search.maven.org/search?q=g:com.sap.cloud.sdk*'
    }
  ]
};
