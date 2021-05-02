import $ from 'jquery';

export function xhrCall(method, url, data = {}, options = {
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(data),
    processData: false,
    xhrFields: { withCredentials: true }, 
}) {
    Object.assign(options, {
        type: method,
        url,
    });
    return /GET/.test(method)
        ? $.getJSON(options.url, $.param(typeof (data) === 'string' ? JSON.parse(data) : data))
        : $.ajax(options);
}

export function controlResponseForbidden(error, reject) {
    if (error.status === 403) {
        window.location.href = '/';
    } else {
        reject(error);
    }
}
