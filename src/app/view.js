define([
    'jquery',
    'src/app/model/ticketsRepository',
    'src/app/action/editRedirect'
], function ($, ticketsRepo, editRedirect) {

    return function () {
        let tickets = ticketsRepo.getTickets();
        let wrapper = $('#tickets-list');

        for (let i in tickets) {
            let ticket = tickets[i];
            let element = $('<li>').prop('id', ticket.id);
            let innerWrapper = $('<a>').appendTo(element).addClass('hover:bg-red-300 hover:shadow-lg rounded-m p-5 m-5 border cursor-pointer');

            innerWrapper.append(
                $('<div>').append($('<dt>').addClass('sr-only').text('Title')).append($('<dd>').addClass('font-medium text-black').text(ticket.title))
            ).append(
                $('<div>').append($('<dt>').addClass('sr-only').text('Description')).append($('<dd>').addClass('font-medium text-gray').text(ticket.description))
            ).append(
                $('<div>').append($('<dt>').addClass('sr-only').text('Assigned')).append($('<dd>').addClass('font-small text-gray').text(ticket.assigned))
            ).append(
                $('<div>').append($('<dt>').addClass('sr-only').text('Status')).append($('<dd>').addClass('font-small text-gray').text(ticket.status))
            ).click(editRedirect(ticket));

            wrapper.append(innerWrapper);
        }

        $('<li>').addClass('hover:border-transparent hover:shadow-xs w-full flex text-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4 cursor-pointer').append(
            $('<a>').addClass('hover:shadow-m w-full m-5 items-center').click(editRedirect(null)).text('Add new ticket')
        ).appendTo(wrapper);
    }
});
