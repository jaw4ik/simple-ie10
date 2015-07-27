﻿define(['knockout','durandal/composition', 'translation'], function (ko, composition, translation) {
    ko.bindingHandlers.fillInTheBlankAnswers = {
        init: function (element, valueAccessor) {
            var $element = $(element),
                value = valueAccessor().inputValues(),
                content = valueAccessor().content;

            $element.html(content);

            $(".blankSelect").select({
                defaultText: translation.getTextByKey('[fill in the blank choose answer]')
            });

            _.each(value, function (blank) {
                var source = $('[data-group-id=' + blank.id + ']', $element),
                    handler = function () {
                        blank.value = source.val().trim();
                    };

                source.val(undefined)
                    .on('blur change', handler);

                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    source.off('blur change', handler);
                });
            });
        },
        update: function (element, valueAccessor) {
            var $element = $(element),
                isAnswered = ko.utils.unwrapObservable(valueAccessor().isAnswered),
                inputValues = ko.utils.unwrapObservable(valueAccessor().inputValues);

            if (!isAnswered) {
                $('.blankSelect').select('refresh');
                $('.blankInput').each(function() {
                    $(this).val('');
                });
            } else {
                _.each(inputValues, function (blank) {
                    var $source = $('[data-group-id=' + blank.id + ']', $element);

                    if ($source.is('input')) {
                        $source.val(blank.value);
                    } else if ($source.is('select')) {
                        $source.select('updateValue', blank.value);
                    }
                });
            }
        }

    };

    composition.addBindingHandler('fillInTheBlankAnswers');

});