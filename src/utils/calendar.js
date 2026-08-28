/**
 * Calendar Utilities for Gokul M & Kavipriya B Wedding
 */

export const WEDDING_EVENTS = {
  reception: {
    title: "Reception: Gokul M & Kavipriya B",
    description: "Wedding Reception celebration of Gokul M & Kavipriya B at JVS Sakthi Mahal, Tindivanam.",
    location: "JVS Sakthi Mahal, Tindivanam – 604001, Tamil Nadu, India",
    startTime: "20260906T190000",
    endTime: "20260906T220000",
    displayDate: "06 September 2026",
    displayTime: "From 7:00 PM Onwards",
  },
  wedding: {
    title: "Wedding Muhurtham: Gokul M & Kavipriya B",
    description: "Sacred Wedding Muhurtham of Gokul M & Kavipriya B at JVS Sakthi Mahal, Tindivanam.",
    location: "JVS Sakthi Mahal, Tindivanam – 604001, Tamil Nadu, India",
    startTime: "20260907T060000",
    endTime: "20260907T073000",
    displayDate: "07 September 2026",
    displayTime: "6:00 AM – 7:30 AM",
  }
};

export function getGoogleCalendarUrl(eventKey = 'wedding') {
  const event = WEDDING_EVENTS[eventKey] || WEDDING_EVENTS.wedding;
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: event.title,
    dates: `${event.startTime}/${event.endTime}`,
    details: event.description,
    location: event.location,
  });
  return `${baseUrl}&${params.toString()}`;
}

export function downloadIcsFile(eventKey = 'wedding') {
  const event = WEDDING_EVENTS[eventKey] || WEDDING_EVENTS.wedding;
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gokul & Kavipriya Wedding//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    `DTSTART:${event.startTime}`,
    `DTEND:${event.endTime}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `Gokul_Kavipriya_${eventKey}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
