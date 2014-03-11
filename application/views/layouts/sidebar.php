<div class="sidebar-default">
    <div class="sidebar-block" id="sidebar-graph">
        <div class="sidebar-inner">
            <?php if (isset($stats)) : ?>
            <p>
                You saved <span class="ns-today"><?php print $stats['saved']['today']; ?></span>
                marks today and archived <span class="na-today"><?php print $stats['archived']['today']; ?></span>.
            </p>
            <?php endif; ?>
        </div>
    </div>
    <?php if (isset($stats) && $stats['marks']['ages ago'] > 0) : ?>
    <div class="sidebar-block">
        <div class="sidebar-inner">
            <p>You have <span class="ns-year"><?php print $stats['marks']['ages ago']; ?></span> marks that are over 1 year old. Want to tidy up a bit?</p>
            <a href="/marks/ages-ago" class="btn">View Marks</a>
            <button data-action="dismiss_this">Do Nothing</button>
            <button data-action="archive_all">Archive All</button>
        </div>
    </div>
    <?php endif; ?>
    <div class="sidebar-block">
        <div class="sidebar-inner">
            <a href="javascript:(function()%7Bl%3D%22<?php print getFullUrl(); ?>%2Fmark%2Fadd%3Furl%3D%22%2BencodeURIComponent(window.location.href)%2B%22%26title%3D%22%2BencodeURIComponent(document.title)%2B%22%26v%3D1%26nowindow%3Dyes%26%22%3Bvar%20e%3Dwindow.open(l%2B%22noui%3D1%22%2C%22Unmark%22%2C%22location%3D0%2Clinks%3D0%2Cscrollbars%3D0%2Ctoolbar%3D0%2Cwidth%3D594%2Cheight%3D485%22)%3Breturn%20false%7D)()" class="btn">Unmark+</a>
            <p class="clear sidenote">To add Marks, drag this button into your bookmark toolbar.  <a href="http://help.unmark.it/bookmarklet" target="_blank">Learn how</a>.</p>
        </div>
    </div>
    <?php $this->load->view('layouts/sidebar/sidebar_notices'); ?>
</div>

<div id="mark-info-dump" class="sidebar-mark-info"></div>
