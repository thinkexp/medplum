import { PhotonWebhook } from '../../photon-types';

export const createdWebhook: PhotonWebhook = {
  method: 'POST',
  path: '/',
  query: {},
  client_ip: '54.225.12.79',
  url: 'https://eo40vrrlskxy2fd.m.pipedream.net/',
  headers: {
    host: 'eo40vrrlskxy2fd.m.pipedream.net',
    'content-length': '570',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/cloudevents-batch+json',
    'x-photon-signature': '554de2d9b96473228593835f033be183bc632eb12bd4e0df61a8c6a5192f567d',
    'x-photon-timestamp': '1724179433658',
    'user-agent': 'axios/1.7.2',
    'accept-encoding': 'gzip, compress, deflate, br',
    'x-datadog-trace-id': '8330054363468631196',
    'x-datadog-parent-id': '6375191779022861325',
    'x-datadog-sampling-priority': '1',
    'x-datadog-tags': '_dd.p.tid=66c4e3e900000000,_dd.p.dm=-0',
    traceparent: '00-66c4e3e900000000739a4c4f1e3d8c9c-58793b2553a5f40d-01',
    tracestate: 'dd=t.dm:-0;t.tid:66c4e3e900000000;s:1',
  },
  body: {
    id: '01J5RHM4DVKA7YGE0AR3J4MS31',
    type: 'photon:order:created',
    specversion: 1.0,
    datacontenttype: 'application/json',
    time: '2024-08-20T18:43:39.579Z',
    subject: 'ord_01J5RHM42NS4WA666RJVP02N45',
    source: 'org:org_q5l4IPPdSR95k8Lc',
    data: {
      createdAt: '2024-08-22T17:16:45.444Z',
      id: 'ord_01J5RHM42NS4WA666RJVP02N45',
      patient: { id: 'pat_01J5RHGXB2ZJFQ7B694CQGSGT5', externalId: 'ec3bb2b3-474f-4d40-804d-9fdb6149b492' },
      pharmacyId: 'phr_01GA9HPXNXTFEQV4146CZ4BN6M',
      fills: [
        {
          id: 'fil_01J5RHM4BZNZSAW36X8T9B0DQR',
          prescription: { id: 'rx_01J5RHKZZQXWAHMXKPT9CF1S6N' },
        },
      ],
    },
  },
};

export const placedWebhook: PhotonWebhook = {
  method: 'POST',
  path: '/',
  query: {},
  client_ip: '54.225.12.79',
  url: 'https://eo40vrrlskxy2fd.m.pipedream.net/',
  headers: {
    host: 'eo40vrrlskxy2fd.m.pipedream.net',
    'content-length': '570',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/cloudevents-batch+json',
    'x-photon-signature': '554de2d9b96473228593835f033be183bc632eb12bd4e0df61a8c6a5192f567d',
    'x-photon-timestamp': '1724179433658',
    'user-agent': 'axios/1.7.2',
    'accept-encoding': 'gzip, compress, deflate, br',
    'x-datadog-trace-id': '8330054363468631196',
    'x-datadog-parent-id': '6375191779022861325',
    'x-datadog-sampling-priority': '1',
    'x-datadog-tags': '_dd.p.tid=66c4e3e900000000,_dd.p.dm=-0',
    traceparent: '00-66c4e3e900000000739a4c4f1e3d8c9c-58793b2553a5f40d-01',
    tracestate: 'dd=t.dm:-0;t.tid:66c4e3e900000000;s:1',
  },
  body: {
    id: '01G7Z7TNFH0YEGVZ719TQZQBER',
    type: 'photon:order:placed',
    specversion: 1.0,
    datacontenttype: 'application/json',
    time: '2022-01-01T01:00:00.000Z',
    subject: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
    source: 'org:org_KzSVZBQixLRkqj5d',
    data: {
      id: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
      externalId: '1234',
      patient: {
        id: 'pat_ieUv67viS0lG18JN',
        externalId: '1234',
      },
    },
  },
};

export const fulfillmentWebhook: PhotonWebhook = {
  method: 'POST',
  path: '/',
  query: {},
  client_ip: '54.225.12.79',
  url: 'https://eo40vrrlskxy2fd.m.pipedream.net/',
  headers: {
    host: 'eo40vrrlskxy2fd.m.pipedream.net',
    'content-length': '570',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/cloudevents-batch+json',
    'x-photon-signature': '554de2d9b96473228593835f033be183bc632eb12bd4e0df61a8c6a5192f567d',
    'x-photon-timestamp': '1724179433658',
    'user-agent': 'axios/1.7.2',
    'accept-encoding': 'gzip, compress, deflate, br',
    'x-datadog-trace-id': '8330054363468631196',
    'x-datadog-parent-id': '6375191779022861325',
    'x-datadog-sampling-priority': '1',
    'x-datadog-tags': '_dd.p.tid=66c4e3e900000000,_dd.p.dm=-0',
    traceparent: '00-66c4e3e900000000739a4c4f1e3d8c9c-58793b2553a5f40d-01',
    tracestate: 'dd=t.dm:-0;t.tid:66c4e3e900000000;s:1',
  },
  body: {
    id: '01G54ZB2Y82V0W67G8M2VW8WEQ',
    type: 'photon:order:fulfillment',
    specversion: 1.0,
    datacontenttype: 'application/json',
    time: '2022-01-01T01:00:00.000Z',
    subject: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
    source: 'org:org_KzSVZBQixLRkqj5d',
    data: {
      id: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
      externalId: '1234',
      fulfillment: {
        type: 'MAIL_ORDER',
        state: 'SHIPPED',
        carrier: 'USPS',
        trackingNumber: '1LS729104296564',
      },
      patient: {
        id: 'pat_ieUv67viS0lG18JN',
        externalId: '1234',
      },
    },
  },
};

export const completedWebhook: PhotonWebhook = {
  method: 'POST',
  path: '/',
  query: {},
  client_ip: '54.225.12.79',
  url: 'https://eo40vrrlskxy2fd.m.pipedream.net/',
  headers: {
    host: 'eo40vrrlskxy2fd.m.pipedream.net',
    'content-length': '570',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/cloudevents-batch+json',
    'x-photon-signature': '554de2d9b96473228593835f033be183bc632eb12bd4e0df61a8c6a5192f567d',
    'x-photon-timestamp': '1724179433658',
    'user-agent': 'axios/1.7.2',
    'accept-encoding': 'gzip, compress, deflate, br',
    'x-datadog-trace-id': '8330054363468631196',
    'x-datadog-parent-id': '6375191779022861325',
    'x-datadog-sampling-priority': '1',
    'x-datadog-tags': '_dd.p.tid=66c4e3e900000000,_dd.p.dm=-0',
    traceparent: '00-66c4e3e900000000739a4c4f1e3d8c9c-58793b2553a5f40d-01',
    tracestate: 'dd=t.dm:-0;t.tid:66c4e3e900000000;s:1',
  },
  body: {
    id: '01G6V8S5TYR056ET83M7Y8MKRK',
    type: 'photon:order:completed',
    specversion: 1.0,
    datacontenttype: 'application/json',
    time: '2022-01-01T01:00:00.000Z',
    subject: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
    source: 'org:org_KzSVZBQixLRkqj5d',
    data: {
      id: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
      externalId: '1234',
      patient: {
        id: 'pat_ieUv67viS0lG18JN',
        externalId: '1234',
      },
    },
  },
};

export const canceledWebhook: PhotonWebhook = {
  method: 'POST',
  path: '/',
  query: {},
  client_ip: '54.225.12.79',
  url: 'https://eo40vrrlskxy2fd.m.pipedream.net/',
  headers: {
    host: 'eo40vrrlskxy2fd.m.pipedream.net',
    'content-length': '570',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/cloudevents-batch+json',
    'x-photon-signature': '554de2d9b96473228593835f033be183bc632eb12bd4e0df61a8c6a5192f567d',
    'x-photon-timestamp': '1724179433658',
    'user-agent': 'axios/1.7.2',
    'accept-encoding': 'gzip, compress, deflate, br',
    'x-datadog-trace-id': '8330054363468631196',
    'x-datadog-parent-id': '6375191779022861325',
    'x-datadog-sampling-priority': '1',
    'x-datadog-tags': '_dd.p.tid=66c4e3e900000000,_dd.p.dm=-0',
    traceparent: '00-66c4e3e900000000739a4c4f1e3d8c9c-58793b2553a5f40d-01',
    tracestate: 'dd=t.dm:-0;t.tid:66c4e3e900000000;s:1',
  },
  body: {
    id: '01G7Z7TNFH0YEGVZ719TQZQBER',
    type: 'photon:order:canceled',
    specversion: 1.0,
    datacontenttype: 'application/json',
    time: '2022-01-01T01:00:00.000Z',
    subject: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
    source: 'org:org_KzSVZBQixLRkqj5d',
    data: {
      id: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
      externalId: '1234',
      patient: {
        id: 'pat_ieUv67viS0lG18JN',
        externalId: '1234',
      },
    },
  },
};

export const reroutedWebhook: PhotonWebhook = {
  method: 'POST',
  path: '/',
  query: {},
  client_ip: '54.225.12.79',
  url: 'https://eo40vrrlskxy2fd.m.pipedream.net/',
  headers: {
    host: 'eo40vrrlskxy2fd.m.pipedream.net',
    'content-length': '570',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/cloudevents-batch+json',
    'x-photon-signature': '554de2d9b96473228593835f033be183bc632eb12bd4e0df61a8c6a5192f567d',
    'x-photon-timestamp': '1724179433658',
    'user-agent': 'axios/1.7.2',
    'accept-encoding': 'gzip, compress, deflate, br',
    'x-datadog-trace-id': '8330054363468631196',
    'x-datadog-parent-id': '6375191779022861325',
    'x-datadog-sampling-priority': '1',
    'x-datadog-tags': '_dd.p.tid=66c4e3e900000000,_dd.p.dm=-0',
    traceparent: '00-66c4e3e900000000739a4c4f1e3d8c9c-58793b2553a5f40d-01',
    tracestate: 'dd=t.dm:-0;t.tid:66c4e3e900000000;s:1',
  },
  body: {
    id: '01G54ZB2Y82V0W67G8M2VW8WEQ',
    type: 'photon:order:rerouted',
    specversion: 1.0,
    datacontenttype: 'application/json',
    time: '2022-01-01T01:00:00.000Z',
    subject: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
    source: 'org:org_KzSVZBQixLRkqj5d',
    data: {
      id: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
      externalId: '1234',
      pharmacy: {
        id: 'phr_hRBVwyp23qjQR0ap',
        name: 'CVS',
        address: {
          street1: '123 Main St',
          city: 'Brooklyn',
          state: 'NY',
          country: 'US',
          postalCode: '11111',
        },
      },
      patient: {
        id: 'pat_ieUv67viS0lG18JN',
        externalId: '1234',
      },
    },
  },
};

export const errorWebhook: PhotonWebhook = {
  method: 'POST',
  path: '/',
  query: {},
  client_ip: '54.225.12.79',
  url: 'https://eo40vrrlskxy2fd.m.pipedream.net/',
  headers: {
    host: 'eo40vrrlskxy2fd.m.pipedream.net',
    'content-length': '570',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/cloudevents-batch+json',
    'x-photon-signature': '554de2d9b96473228593835f033be183bc632eb12bd4e0df61a8c6a5192f567d',
    'x-photon-timestamp': '1724179433658',
    'user-agent': 'axios/1.7.2',
    'accept-encoding': 'gzip, compress, deflate, br',
    'x-datadog-trace-id': '8330054363468631196',
    'x-datadog-parent-id': '6375191779022861325',
    'x-datadog-sampling-priority': '1',
    'x-datadog-tags': '_dd.p.tid=66c4e3e900000000,_dd.p.dm=-0',
    traceparent: '00-66c4e3e900000000739a4c4f1e3d8c9c-58793b2553a5f40d-01',
    tracestate: 'dd=t.dm:-0;t.tid:66c4e3e900000000;s:1',
  },
  body: {
    id: '01G54ZB2Y82V0W67G8M2VW8WEQ',
    type: 'photon:order:error',
    specversion: 1.0,
    datacontenttype: 'application/json',
    time: '2022-01-01T01:00:00.000Z',
    subject: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
    source: 'org:org_KzSVZBQixLRkqj5d',
    data: {
      id: 'ord_01G8AHAFDJ7FV2Y77FVWA19009',
      externalId: '1234',
      reason: 'EXAMPLE REASON',
      patient: {
        id: 'pat_ieUv67viS0lG18JN',
        externalId: '1234',
      },
    },
  },
};